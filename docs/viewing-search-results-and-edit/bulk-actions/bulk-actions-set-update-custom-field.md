---
title: Actions - Set custom field
sidebar_label: Actions - Set custom field
sidebar_position: 40
---

# Set custom field
* * *
## Set (update) a custom field for multiple contacts
If you are like other Broadstripes users, it's likely that you use at least one custom field to track information that's important to your campaign. If you want to set or update the value of a custom field for multiple users at once, you can use a bulk action to simplify that task. (If you are new to custom fields, you can read more about them in the [Data tools overview](https://help.broadstripes.com/help-articles/admin-tools/data-tools-admin/data-tools-overview/).)

:::info Text input exception
Before you get started, note that not _all_ types of custom fields can be updated in bulk. For instance, custom fields that allow you to write free-form text (like **single-line** and **multiple-line text input boxes**) cannot be updated in bulk. **Check boxes**, **radio buttons**, and **drop-down** or **multiple-selection choosers**, however, can all be updated using this time-saving method.
:::

For this example, we'll update a group of contacts to show that they are all interested in benefits, something we track in our project using a custom field called "**Interests**."
1. First, we'll run a search that includes the people whose records we want to update. From the **Search Results** page, we'll [select the contacts](/viewing-search-results-and-edit/selecting-deselecting-contacts.md) who are interested in benefits. (If you need help running a search, check out the [Create and save a search](/search/index.md) article.)
2. With the contacts selected, we'll go to the **Actions** drop-down menu and choose **Set custom field**.[![](/img/viewing-search-results-and-edit/1922eda-BulkSetCustom-1.png)](/img/viewing-search-results-and-edit/1922eda-BulkSetCustom-1.png)

:::info Custom fields are unique to your project
In this example, we're using a custom field named "Interests" to track a worker's possible area of engagement. If you don't see this option in your list of choices, don't worry. Since custom fields are set up by organizations like yours to meet your specific needs, your project will likely contain custom fields with totally different names, values, and purposes.
:::

3. When prompted to select the custom field, we'll choose **Interests**.![](/img/viewing-search-results-and-edit/fb23a33-ActionSetCustomChooseInt-1.png)
4. From the drop-down list of values that appears, we'll choose **Benefits** and click **Update**.!
5. When you click **Update**, a notification will appear showing that Broadstripes has queued the contacts for the update. No further action is needed – Broadstripes will automatically update all of the contact records that we selected, setting the custom field called "**Interests**" to show the value "**Benefits**".![](/img/viewing-search-results-and-edit/361cd60-ActionCustomQueued.png)

## Clear the value of a custom field with bulk actions

In certain cases, you can also use a bulk action to clear out the value of a custom field.

### Drop-down choosers
If your custom field is a drop-down chooser, simply select the **blank value** at the top of the drop-down list. This will clear any previous value for the selected contacts.
![](/img/viewing-search-results-and-edit/0d166be-ActionCustomClearBlank.png)

### Checkboxes
If your custom field is a **single checkbox** and you'd like to clear the value, simply leave the checkbox unchecked and then click **Update**. This will leave the box unchecked for all selected contacts.
![](/img/viewing-search-results-and-edit/ef9ac52-ActionCustomClearCheckBlank.png)
If your custom field contains **multiple checkboxes**, first check the value(s) you want to clear and then click **Remove selected options**. For instance, as shown below, checking the value **"Labor"** and then clicking **Remove selected options** will clear "Labor" from all selected contact records but leave all other checked boxes untouched.
![](/img/viewing-search-results-and-edit/6cab9d5-ActionCustomClearSelected.png)
![](/img/viewing-search-results-and-edit/15a2a23-ActionCustomClearSelectedRemove-1-1.png)