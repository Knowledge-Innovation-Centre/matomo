<!--
  Copyright (C) InnoCraft Ltd - All rights reserved.

  NOTICE:  All information contained herein is, and remains the property of InnoCraft Ltd.
  The intellectual and technical concepts contained herein are protected by trade secret or
  copyright law. Redistribution of this information or reproduction of this material is strictly
  forbidden unless prior written permission is obtained from InnoCraft Ltd.

  You shall use this code only in accordance with the license agreement obtained from
  InnoCraft Ltd.

  @link https://www.innocraft.com/
  @license For license details see https://www.innocraft.com/license
-->

<template>
  <div class="manageRollUp">
    <br />
    <div v-show="!showAllSites">
      <span
        for="rollupsiteid"
        class="siteSelectorLabel"
      >
        {{ translate('RollUpReporting_SelectMeasurable') }}
      </span>
      <div>
        <SiteSelector
          v-model="selectedSite"
          id="rollupsiteid"
          :switch-site-on-select="false"
          :show-selected-site="true"
          :only-sites-with-admin-access="true"
        >
        </SiteSelector>
      </div>
    </div>
    <div v-show="!showAllSites">
      <span for="rollupcontains">
        {{ translate('RollUpReporting_SelectMeasurablesMatchingSearch') }}
      </span>
      <br />
      <input
        class="control_text rollUpSearchMeasurablesField"
        type="text"
        id="rollupcontains"
        v-model="containsText"
        :placeholder="translate('General_Search')"
      />
      <input
        style="margin-left:3.5px"
        :disabled="!containsText"
        class="btn rollUpSearchFindMeasurables"
        type="button"
        @click="addSitesContaining(containsText)"
        :value="translate('RollUpReporting_FindMeasurables')"
      />
    </div>
    <table class="entityTable">
      <thead>
        <tr>
          <th class="siteId">{{ translate('General_Id') }}</th>
          <th class="siteName">{{ translate('General_Name') }}</th>
          <th class="siteAction">{{ translate('General_Remove') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-show="!sites.length">
          <td colspan="3">{{ translate('RollUpReporting_NoMeasurableAssignedYet') }}</td>
        </tr>
        <tr
          v-show="sites.length > 0"
          v-for="(site, index) in sites"
          :key="index"
        >
          <td>{{ site.id }}</td>
          <td>{{ site.name }}</td>
          <td class="siteAction">
            <span
              class="icon-minus table-action"
              @click="removeSite(site)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  SiteSelector,
  SiteRef,
  AjaxHelper,
  translate,
  Matomo, Site,
} from 'CoreHome';

const KEY_NO_SITE_DEFINED = 'nositedefined';

interface ManageRollUpState {
  showAllSites: boolean;
  containsText: string;
  selectedSite: null|SiteRef;
  allSites: null|Site[];
}

export default defineComponent({
  props: {
    modelValue: Array,
  },
  components: {
    SiteSelector,
  },
  data(): ManageRollUpState {
    return {
      showAllSites: false,
      containsText: '',
      selectedSite: null,
      allSites: null,
    };
  },
  created() {
    AjaxHelper.fetch({
      method: 'SitesManager.getSitesWithAdminAccess',
      filter_limit: -1,
    }).then((sites) => {
      this.allSites = sites;
    });

    if (!this.modelValue?.length) {
      this.$emit('update:modelValue', [KEY_NO_SITE_DEFINED]);
    }
  },
  watch: {
    selectedSite(newValue) {
      this.addSite(newValue);
    },
    modelValue() {
      if (this.modelValue && this.modelValue.indexOf('all') > -1) {
        this.showAllSites = true;
      }

      if (!this.hasKeyDefined()) {
        this.$emit('update:modelValue', [...(this.modelValue || []), KEY_NO_SITE_DEFINED]);
        return;
      }

      if (this.modelValue?.length === 1 && this.hasKeyDefined()) {
        this.showAllSites = false;
      }
    },
  },
  emits: ['update:modelValue'],
  computed: {
    sites() {
      if (this.modelValue && this.modelValue.indexOf('all') > -1) {
        return [{ name: translate('RollUpReporting_AllMeasurablesAssigned'), id: 'all' }];
      }

      const result: SiteRef[] = [];
      if (this.allSites?.length && this.modelValue) {
        (this.modelValue || []).forEach((idSite) => {
          if (idSite === KEY_NO_SITE_DEFINED) {
            return;
          }

          (this.allSites as Site[]).forEach((site) => {
            if (site && site.idsite === idSite) {
              result.push({ id: site.idsite, name: site.name });
            }
          });
        });
      }

      return result;
    },
  },
  methods: {
    addSite(site: SiteRef) {
      if (this.showAllSites) {
        return;
      }

      if (site && site.id) {
        let update = false;

        let newSiteIds = this.modelValue || [];
        if (site.id === 'all') {
          newSiteIds = [KEY_NO_SITE_DEFINED];
          update = true;

          this.showAllSites = true;
        }

        // we only add the site id if it was not added before
        if (!this.isSiteIncludedAlready(site.id)) {
          newSiteIds.push(site.id);
          update = true;
        }

        if (update) {
          this.$emit('update:modelValue', newSiteIds);
        }
      }
    },
    isSiteIncludedAlready(idSite: string|number) {
      return this.modelValue?.length && this.modelValue.indexOf(idSite) !== -1;
    },
    removeSite(site: SiteRef) {
      const index = (this.modelValue || []).indexOf(site.id);

      if (index > -1) {
        const newValue = [...(this.modelValue || [])];
        newValue.splice(index, 1);
        this.$emit('update:modelValue', newValue);
      }
    },
    addSitesContaining(searchTerm: string) {
      if (!searchTerm) {
        return;
      }

      const displaySearchTerm = `"${Matomo.helper.escape(Matomo.helper.htmlEntities(searchTerm))}"`;

      AjaxHelper.fetch<Site[]>({
        method: 'SitesManager.getSitesWithAdminAccess',
        pattern: searchTerm,
        filter_limit: -1,
      }).then((sites) => {
        if (!sites || !sites.length) {
          const sitesToAdd = `<div>
            <h2>${translate('RollUpReporting_MatchingSearchNotFound', displaySearchTerm)}</h2>
            <input role="ok" type="button" value="${translate('General_Ok')}"/>
          </div>`;
          Matomo.helper.modalConfirm(sitesToAdd);
          return;
        }

        const newSites: string[] = [];
        const alreadyAddedSites: string[] = [];

        sites.forEach((site) => {
          const siteName = window.vueSanitize(Matomo.helper.htmlEntities(site.name));
          const siteTitle = `${siteName} (id ${parseInt(`${site.idsite}`, 10)})<br />`;
          if (this.isSiteIncludedAlready(site.idsite)) {
            alreadyAddedSites.push(siteTitle);
          } else {
            newSites.push(siteTitle);
          }
        });

        let title = translate('RollUpReporting_MatchingSearchConfirmTitle', newSites.length);
        if (alreadyAddedSites.length) {
          const text = translate('RollUpReporting_MatchingSearchConfirmTitleAlreadyAdded', alreadyAddedSites.length);
          title += ` (${text})`;
        }
        let sitesToAdd = `<div><h2>${title}</h2><p>
          ${translate('RollUpReporting_MatchingSearchMatchedAdd', newSites.length, displaySearchTerm)}:
          <br /><br />`;
        sitesToAdd += newSites.join('');

        if (alreadyAddedSites.length) {
          const text = translate(
            'RollUpReporting_MatchingSearchMatchedAlreadyAdded',
            alreadyAddedSites.length,
            displaySearchTerm,
          );
          sitesToAdd += `<br />${text}:<br /><br />${alreadyAddedSites.join('')}`;
        }

        sitesToAdd += `</p><input role="yes" type="button" value="${translate('General_Yes')}"/>
          <input role="no" type="button" value="${translate('General_No')}"/>
          </div>`;
        Matomo.helper.modalConfirm(sitesToAdd, {
          yes: () => {
            sites.forEach((site) => this.addSite({ id: site.idsite, name: site.name }));
          },
        });
      });
    },
    hasKeyDefined() {
      return (this.modelValue || []).indexOf(KEY_NO_SITE_DEFINED) > -1;
    },
  },
});
</script>
