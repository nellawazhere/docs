---
title: "Add a rule or multiple rules to your search"
date: "2018-03-08"
categories: 
  - "search"
---

\[et\_pb\_section fb\_built="1" admin\_label="section" \_builder\_version="3.22"\]\[et\_pb\_row admin\_label="row" \_builder\_version="3.25" background\_size="initial" background\_position="top\_left" background\_repeat="repeat"\]\[et\_pb\_column type="4\_4" \_builder\_version="3.25" custom\_padding="|||" custom\_padding\_\_hover="|||"\]\[et\_pb\_text \_builder\_version="3.27.4" background\_size="initial" background\_position="top\_left" background\_repeat="repeat"\]

## Overview

With Broadstripes search, you can filter on multiple keywords or phrases, letting you most effectively refine your list of search results. Broadstripes refers to each of these search filters as "**rules**."

For this example, we'll show how to use multiple rules to search our project for the leaders at a particular shop called "Big Shop."

The two rules in this search might be stated this way:

> **Find people who...**
> 
> have a leadership role **AND** work at Big Shop

## Build a multiple-rules search

1. To get started, click the **Advanced** button to the right of the search box at the top of the page.![](images/23b2152-SearchWrkAdvButton-1.jpg)
2. A **search builder** panel will appear below the search box.![](images/2fb6ebd-BuildSaveSearchDefault.png)
3. Initially, the panel will offer to search for people by **Name**, but you can easily change that to search by leadership role, our first rule.
4. To search for leaders, select "**Leadership role**" from the drop-down list on the left. That choice can be found under the **Leadership** section of the drop-down list, but you can bring the choice up even quicker by typing "**leadership**" into the **Filter box** (as shown below).![](images/8450f77-SearchMultRuleLeaderhip.png)
5. In the **middle drop-down box**, we'll choose "**has any value**" to see everyone with a leadership role. (If we wanted to select just people in a specific role, we could choose "**contains the word(s)**" as our operator and then choose the role from the pull-down list that would appear to the right.)![](images/a3309fe-SearchMultRuleLeaderhipAnyVal.png)
6. Next, we need to add our second rule, filtering the results to show only leaders at "**Big Shop**."
7. We'll add our second rule by clicking the **+Add rule** button in the upper right corner of the search builder.![](images/915a0ab-SearchMultRuleAddRule1.png)
8. Next, we'll specify that for this rule **Employer (in or below)** should contain the words "**Big Shop**."
    
    \[caption id="attachment\_2654" align="aligncenter" width="807"\]![](images/3c5968c-SearchMultRuleComplete1.png) A completed search query for leaders at "Big Shop."\[/caption\]
9. Before running the search, we need to check our boolean operator "**AND**". Since our search depends on _both_ of our rules being true to find people with a leadership role who are employed at Big Shop, we want to confirm we're using the "**AND**" operator in our search.

\[caption id="attachment\_2655" align="aligncenter" width="161"\]![The dark blue box indicates that "AND" is selected.](images/d3e52e6-SearchMultRuleCompleteAND.png) The dark blue box indicates that "**AND**" is selected.\[/caption\]

#### What's a Boolean operator?

Boolean operators are used in searches to connect and define the relationship between search rules. Broadstripes uses two Boolean operators: AND and OR.

Use "**AND**" to run a search where _all_ of the rules are true. Use "**OR**" to run a search where _at least one_ of the rules is true.

1. Finally, click the **Search** button to run the search.
2. Everyone with a leadership role at Big Shop will appear in the **Search Results** panel.

![](images/30c0bb9-SearchMultRulesResult.png)

## Learn more

You can learn more (and watch video tutorials) about simple searches and searching with groups of rules in these articles:

- [Build an advanced search with the search builder](https://help.broadstripes.com/help-articles/using-broadstripes/search/build-an-advanced-search/)
- [Add rule groups to your search](https://help.broadstripes.com/help-articles/using-broadstripes/search/add-rule-groups-to-your-search/)

\[/et\_pb\_text\]\[/et\_pb\_column\]\[/et\_pb\_row\]\[/et\_pb\_section\]
