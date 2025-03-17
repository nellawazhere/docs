---
title: "Using Advanced Searches: Correlation"
date: "2025-01-02"
---

Broadstripes offers powerful search capabilities, but understanding the correct syntax is key to getting precise results. Here, we’ll explore how to craft searches to ensure your results align with your expectations.

#### Example Scenario: Searching for multiple employments and different job titles

Imagine you want to conduct a survey of all workers who are employed at the Gurand Hotel as Housekeepers and, due to wage disparities, have secured a second job with a different job title. You will need to create search that will find these workers. This search has three conditions -

1. The worker is employed at the Gurand Hotel.
2. The Gurand Hotel employment has the job title "Housekeeper."
3. The worker has another job that is **not** as a Housekeeper.

Generally, you might search for employer = "Gurand Hotel" AND jobtitle = "Housekeeper" and jobtitle != "Housekeeper".

At first glance, this seems like the correct search. However, all three conditions are correlated. This search will return zero results because it will try to apply the conditions jobtitle = "Housekeeper" and jobtitle != "Housekeeper" to the same employment relationship. The search is invalid since one employment relationship cannot have two conflicting job titles.

We will need conditions #1 and #2 to correlate, but condition #3 must be disassociated or decorrelated from conditions #1 and #2 because they reference a separate employment relationship.

### Creating an advanced search

To ensure workers match all three conditions (Two conditions for the one employment relationship and one condition for a second employment), you need to group and decorrelate the search criteria. In Broadstripes, this is done by using parentheses to group and separate conditions:

(employer = "Gurand Hotel" and jobtitle = "Housekeeper")( jobtitle != "Housekeeper")

\[caption id="attachment\_27422" align="aligncenter" width="600"\]![](images/correlated-search-text-01-300x64.gif) Search Text Diagram 1\[/caption\]

This query specifies that the two groups of conditions will apply to separate employments, as seen in the diagram above.

Below is a list of workers who work at area hotels.

\[table id=23 /\]

Each row indicates a unique employment relationship for a person. Some people appear on more than one row because they are employed at multiple places.

If we search for "Gurand Hotel" AND jobtitle = "Housekeeper" and jobtitle != "Housekeeper", zero results will return because you have one job title per row or per employment relationship.

However, a search for (employer = "Gurand Hotel" and jobtitle = "Housekeeper")( jobtitle != "Housekeeper") will return:

- **Devon Abrams**: Works at the Gurand Hotel as a Housekeeper and at Basik Hotel in a different role.
- **Rachel Downing**: Works at the Gurand Hotel as a Housekeeper and at Leux Hotel in a different role.
- **Chuck Waters**: Works at the Gurand Hotel as a Housekeeper and at Leux Hotel in a different role.

These workers satisfy the conditions of employment at the Gurand Hotel as a Housekeeper (Employment 1 in Search Text Diagram 1).  They also satisfy the condition of a second employment but not in a Housekeeper position. (Employment 2 in Search Text Diagram 1)

### Decorrelating Keywords

When performing searches in Broadstripes, some keywords are automatically **correlated**, meaning they are treated as if they must both apply to the same search condition. While this is useful in many cases, it can sometimes lead to unintended results.

#### Example: Searching for SMS Interactions

Suppose you want to find people who:

1. Received the SMS message with index number 123, AND
2. Sent an SMS message back to a virtual number at some point.

A straightforward search might look like sms = 123 AND sms = incoming.

However, this search will not work as intended. Here’s why:

- The search assumes that sms = 123 and sms = incoming must apply to the same message.
- SMS messages in Broadstripes that are assigned an index number (e.g. 123) are always outgoing, meaning they cannot also be incoming.
- As a result, this search will return zero results because it’s looking for an impossible condition.

To perform the intended search, you need to **decorrelate** the search keywords. This tells Broadstripes to treat the conditions separately, applying them to separate record characteristics. Similar to correlating, you can decorrelate by grouping the conditions with parentheses:

(sms = 123)(sms = incoming)

This search will look for the following:

- The first condition, sms = 123, finds people who were sent SMS message #123.
- The second condition, sms = incoming, finds people who sent a reply to a virtual SMS number.

By disassociating the conditions, Broadstripes looks for people who satisfy both conditions across different messages, rather than trying to find both conditions in a single SMS message.

We will need to disassociate or decorrelate the search to find people who received SMS message #123 and sent a message back to a virtual number at some point. For this we will apply the same process to the search keywords as above. The search (sms = 123)(sms = incoming) will return the desired results.

There are specific search keywords in Broadstripes that automatically correlate. You may refer to the [search language guide](https://help.broadstripes.com/search-language-reference/) to see which keywords are correlated.
