---
title: "Add rule groups to your search (+video)"
date: "2018-03-08"
categories: 
  - "search"
---

\[et\_pb\_section fb\_built="1" admin\_label="section" \_builder\_version="3.22" fb\_built="1" \_i="0" \_address="0"\]\[et\_pb\_row admin\_label="row" \_builder\_version="3.25" background\_size="initial" background\_position="top\_left" background\_repeat="repeat" \_i="0" \_address="0.0"\]\[et\_pb\_column type="4\_4" \_builder\_version="3.25" custom\_padding="|||" \_i="0" \_address="0.0.0" custom\_padding\_\_hover="|||"\]\[et\_pb\_text \_builder\_version="3.27.4" background\_size="initial" background\_position="top\_left" background\_repeat="repeat" \_i="0" \_address="0.0.0.0"\]

## Overview

You may remember that we built a [multiple-rule search](https://help.broadstripes.com/help-articles/using-broadstripes/search/search-with-multiple-rules/) for "people who are leaders at Big Shop" in a previous help article. Imagine that you now need a similar search that will find leaders at either "Big Shop" or "Small Shop".

The rules in this search might be stated this way:

> **Find people who...**
> 
> 1\. have a leadership role **AND** 2\. work at Big Shop **OR** work at Small Shop

Rule #1 is easy (it's the same as in the earlier [multiple rule search](https://help.broadstripes.com/help-articles/using-broadstripes/search/search-with-multiple-rules/) article), but rule #2 is really a clause composed of two rules about two different shops. Broadstripes calls such a clause a "group".

Learn how to build a search with a group in this video:

## Video: Add rule groups to your search

\[/et\_pb\_text\]\[et\_pb\_text admin\_label="How to Add Rule Groups to Search" \_builder\_version="3.27.4" custom\_margin="||||false|false" link\_option\_url\_new\_window="on" \_i="0" \_address="0" global\_module="22580"\][![](images/SearchRuleGroups_Video_Thumbnail_320-200.png)](https://vimeo.com/322305025)

### Search with rule groups

\[/et\_pb\_text\]\[et\_pb\_text \_builder\_version="3.27.4" \_i="2" \_address="0.0.0.2"\]

## Build a search with groups (clauses)

1. To get started, click the **Advanced** button to the right of the search box at the top of the page.![](images/8a72971-SearchWrkAdvButton.jpg)

1. A **search builder** panel will appear below the search box.![](images/3aa6b9b-SearchWrkAdvBuilder.jpg)

1. We'll start by creating our three rules first and construct the group last.
2. The search builder panel automatically creates a rule as it's opened. Initially, the panel will offer to search for people by **Name**, but we'll change that for our first rule.
3. To search for leaders, we'll select "**Leadership role**" from the drop-down list on the left just as we did in the [Search with multiple rules](https://help.broadstripes.com/help-articles/using-broadstripes/search/search-with-multiple-rules/) article.![](images/8450f77-SearchMultRuleLeaderhip-1.png)

1. In the **middle drop-down box**, we'll choose "**has any value**" to see everyone with a leadership role.![](images/a3309fe-SearchMultRuleLeaderhipAnyVal-1.png)

1. Next, we need to add our second rule, filtering the results to show leaders at "**Big Shop**." (We'll add a rule to see leaders at "**Small Shop**" next).
2. We'll add the second rule by clicking the **+Add rule** button in the upper right corner of the search builder.![](images/2523f4d-SearchMultRuleAddRule.png)

1. We'll specify that for this rule **Employer (in or below)** should contain the words "**Big Shop**."![](images/3c5968c-SearchMultRuleComplete1.png)

1. Next, we'll add our third rule by clicking the **+Add rule** button again.
2. We'll specify that we'd also like to see records where **Employer (in or below)** contains the words "**Small Shop**."![](images/8271ad1-SearchGroupsRulesAll-1.png)

1. Now we need to **create a group** for our rules about employment since we want Broadstripes to search for people who are leaders at _either_ "Big Shop" or "Small Shop" (not both).
2. To create a new group, the **+Add group** button in the upper right corner of the search builder. The search builder allows you to add groups wherever you want. (You can even add groups within groups, but let's not go there right now.)![](images/166d1c9-SearchGroupsAddGroup.png)

1. You'll notice that the new group already contains an automatically-generated rule that defaults to search by **Name**. Delete that rule since it won't be needed in this search by clicking the red **Delete** button to the right of the rule drop-down menus.
    
    \[caption id="attachment\_2678" align="aligncenter" width="814"\]![](images/ad989f2-SearchGroupsDelDefaultRule.png) Delete the rule that appears by default.\[/caption\]

1. Now let's build the group.
2. One at a time, **drag and drop** the two employment rules into the new group.
    
    \[caption id="attachment\_2679" align="aligncenter" width="326"\]![Click near the  icon and hold the mouse down to select a rule.](images/08e5949-SearchGroupsClickRule2.png) **Click** near the double-ended arrow icon and hold the mouse down to select a rule.\[/caption\]

\[caption id="attachment\_2680" align="aligncenter" width="807"\]![With the mouse still held down, drag the rule into the light gray work space in the group.](images/c422c0d-SearchGroupsDropRule.png) With the mouse still held down, **drag** the rule into the light gray work space in the group.\[/caption\]

1. Once you've moved both rules into the group, your search panel will look like this:![](images/054692e-SearchGroupsDropRuleALL.png)

1. We're almost done, but before running the search, we need to check our boolean operators.

#### What's a Boolean operator?

Boolean operators are used in searches to connect and define the relationship between search rules. Broadstripes uses two Boolean operators: AND and OR.

Use "**AND**" to run a search where _all_ of the rules are true. Use "**OR**" to run a search where _at least one_ of the rules is true.

1. Since our search depends on people being employed at either "Big Shop" OR "Small Shop" AND having a leadership role, we need our operators to match that.

Above the leadership rule, leave "**AND**" selected. Click "**OR**" in the top left corner of the employment rules group to toggle it on (a dark blue background indicates that it's selected).

Your completed search will look like this:![](images/5694339-SearchGroupsDropRuleOR.png)

1. Finally, click the **Search** button to run your search.
2. Everyone with a leadership role at either Big Shop or Small Shop will appear in the **Search Results** panel.

## Learn more

Want to go back to the basics and learn about simple searches or searching with just one or two rules? Check out these articles:

- [Build an advanced search with the search builder](https://help.broadstripes.com/help-articles/using-broadstripes/search/build-an-advanced-search/)
- [Search with multiple rules](https://help.broadstripes.com/help-articles/using-broadstripes/search/search-with-multiple-rules/)

\[/et\_pb\_text\]\[/et\_pb\_column\]\[/et\_pb\_row\]\[/et\_pb\_section\]
