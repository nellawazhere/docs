---
title: The Broadstripes search language
sidebar_label: Search language reference
sidebar_position: 65
---

### Broadstripes Search Terms

Broadstripes search allows you to quickly find a record or group of records using a wide variety of search criteria, including names, dates, word fragments, or even blank values. This document provides a reference list of the standard search terms available to most projects. An additional reference covers feature-specific searches that are not available in all projects.

### Search Operators

| Operator | Matching type | Example |
|----------|--------------|--------|
| `=` | Matches whole words in any order | `name = john` finds people named John but not Johnson |
| `:` | Matches word fragments in any order | `name : john` finds people named John or Johnson |
| `==` | Matches word(s) exactly (but still not case sensitive) | `name == john` finds people named john but not John |
| `!=` | Finds contacts whose records **do not** contain the specified words | `name != john` excludes people named John but not Johnson |
| `!:` | Finds contacts whose records **do not** contain the specified word fragments | `name !: john` excludes people named John or Johnson |
| `!==` | Finds contacts whose records **do not** exactly match the specified text (not case sensitive) | `name !== john` finds people not exactly named "john" |
| `>` | Values greater-than (numbers) or after (dates) | `CustomNumber > 50` finds contacts with a custom field over 50 |
| `<` | Values less-than (numbers) or before (dates) | `LastContact < "1 month ago"` finds people last contacted over a month ago |

### Basic Searches

| Basic | Finds... | Details |
|-------|---------|--------|
| `carson` | people or orgs with the whole word "carson" in any text field (including all contact details, notes, timeline items, and custom text fields) | |
| `john*` | people or orgs with the word fragment "john" in any text field, e.g. "John", "Johnson", or "Johnstown" | The asterisk is a wildcard character (not yet supported in keyword searches) |

### General Searches
| General | Finds... | Details | Correlated Group |
|---------|-----------|---------|------------------|
| `name = parker` | people and orgs with the word "parker" anywhere in their name | | |
| `first = mary` | people with the word "mary" anywhere in their first name | first will respond to the following magic values: `any`, `none` | |
| `middle : M.` | people with a middle name of "M." | middle will respond to the following magic values: `any`, `none` | |
| `last = McFly` | people with the word "McFly" anywhere in their last name | last will respond to the following magic values: `any`, `none` | |
| `id = ABC-123` | people or orgs with the Broadstripes ID "ABC-123". Note: must be full ID (exact match) | | |
| `code <= 2` | people and orgs with a code lower than 3 (i.e. 1 or 2). Note: If the project has a code 0 (not recommended), people with that code will be found by this search, too. | code will respond to the following magic values: `any`, `none` | |
| `created < 2/14/2020` | people who were created before February 14, 2020 | | |
| `notes = "basketball fan"` | people and orgs with the word "basketball fan" anywhere in their Notes field | notes will work with the following magic values: `any`, `none` | |
| `notes != referral` | people and orgs with no notes fields containing the word "referral" | notes will work with the following magic values: `any`, `none` | |
| `list = "Q1 Targets"` | people and orgs in the "Q1 Targets" list | list will work with the following magic values: `any`, `none` | |
| `attachment = card` | people and orgs with an attached file that has "card" in its name | attachment will work with the following magic values: `any`, `none` | |
| `attachment = any` | people and orgs with any attached files | attachment will work with the following magic values: `any`, `none` | |
| `type = person` | all people in the project. Note: to find orgs, use the search `type = org` | type will work with the following magic values: `all`, `person`, `org`, `user` | |
| `age > 20` | people who have a birth date more than 20 years ago | | |
| `unionmember = no` | people who have not been recorded as a union member | unionmember will respond to the following magic values: `yes`, `no` | |
| `usergroup = "NYC Organizers"` | people who are part of the Broadstripes user group name "NYC Organizers" | usergroup will respond to the following magic values: `any`, `none` | |
| `import = 52` | people who were created or updated by a data import with ID# 52 | import will respond to the following magic values: `any`, `none` | |
| `createdby = "Jane Organizer"` | people created by a user named "Jane Organizer" | createdby will respond to following magic values: `me`, `any`, `none` | |
| `updatedby = "Dennis"` | people whose last update was made by a user named Dennis | updatedby will respond to following magic values: `me`, `!=me`, `any`, `none` | |

### Contact Info
| Search Term | Finds... | Details | Correlated Group |
|------------|-----------|---------|------------------|
| `street = "Pennsylvania Ave"` | people and orgs with an address containing "Pennsylvania" and "Ave" in the Street or Street Type fields | Note: Addresses with the word "Avenue" spelled out would not match | |
| `city = Washington` | people and orgs with an address with the word "Washington" in the City field | | |
| `state = DC` | people and orgs with an address with "DC" in the State field | | |
| `zip = 20500` | people and orgs with an address with "20500" in the Zip Code field | | |
| `email = gmail.com` | people and orgs with an email address which contains the text "gmail.com" | email will also respond to following magic values: `any`, `none`, `duplicate`, `repeated`, `error`, `home`, `other`, `personal`, `business` | Correlates with emailmod, emailopt, emailoptoutreason, emailoptinreason |
| `phone : 202` | people and orgs with a phone number that contains the numbers "202" | Note: The ":" operator finds word or number fragments and is best for searching phone numbers. phone will also respond to following magic values: `any`, `none`, `good`, `bad`, `duplicate`, `repeated`, `error`, `home`, `other`, `personal`, `business` | |
| `address = mapped` | people and orgs with an address that Broadstripes was able to geo-locate | address will also respond to following magic values: `review`, `repeated`, `bad`, `good`, `any`, `none`, `multiple` | |

### Contact Timeline
| Search Term | Finds... | Details | Correlated Group |
|------------|-----------|---------|------------------|
| `timeline = "willing to meet"` | people and orgs with the phrase "willing to meet" in any of their timeline notes | timeline will also respond to the following magic values: `any`, `none` | timelineauthor, contactedby, timelinedate, contact, timeline, timelinetype |
| `timelinedate >= "5 months ago"` | people and orgs with at least one timeline entry that was made in the last five months | | timelineauthor, contactedby, timelinedate, contact, timeline, timelinetype |
| `timelinetype = "Email Campaign"` | people and orgs with an "Email Campaign" timeline entry | timelinetype will also respond to following magic values: `any`, `none`, `"group meeting"`, `"one-on-one"`, `"phone call"`, `"email"`, `"house visit"`, `"note"`, `"code change"`, `"event change"` | timelineauthor, contactedby, timelinedate, contact, timeline, timelinetype |
| `contactedby = Kyle` | people and orgs with a timeline entry with "Kyle" in the Contacted By field | contactedby will respond to the following magic values: `any`, `none` | timelineauthor, contactedby, timelinedate, contact, timeline, timelinetype |
| `timelineauthor = "George Lee"` | people and orgs with a timeline entry that was created by "George Lee" | timelineauthor will respond to the following magic values: `any`, `none` | timelineauthor, contactedby, timelinedate, contact, timeline, timelinetype |
| `contact = 1/10/2016` | people and orgs with a timeline entry dated "1/10/2016" with Direct Contact box checked | | timelineauthor, contactedby, timelinedate, contact, timeline, timelinetype |
| `lastcontact < "1 year ago"` | people and orgs which have not had a timeline entry with "Direct Contact" box checked in the past year | | |

### Employment & Dept Structure
| Search Term | Finds... | Details | Correlated Group |
|------------|-----------|---------|------------------|
| `employer = none` | people who have no employments | `employer` will respond to the following magic values: `unspecified`, `any` | Correlates with `bargainingunit`, `classification`, `jobtitle`, `senioritydate`, `startdate`, `department`, `employees`, `employer`, `indirect`, `hourlyrate`, `hours`, `primary`, `tipcard`, `isprimary`, `employment` |
| `employer = unspecified` | people who have an employment, but with no employer specified | `employer` will respond to the following magic values: `unspecified`, `any`, `none` | Correlates with `bargainingunit`, `classification`, `jobtitle`, `senioritydate`, `startdate`, `department`, `employees`, `employer`, `indirect`, `hourlyrate`, `hours`, `primary`, `tipcard`, `isprimary`, `employment` |
| `employer == "Big Shop : Main Floor"` | people who are employed on the "Main Floor" of "Big Shop" (must match exactly) | `employer` will respond to the following magic values: `unspecified`, `any`, `none` | Correlates with `bargainingunit`, `classification`, `jobtitle`, `senioritydate`, `startdate`, `department`, `employees`, `employer`, `indirect`, `hourlyrate`, `hours`, `primary`, `tipcard`, `isprimary`, `employment` |
| `primary = "Big Shop"` | people whose "primary" employment is at "Big Shop" (only useful in projects where workers have multiple employments) | `primary` will respond to the following magic values: `any`, `none`, `set`, `notset` | Correlates with `bargainingunit`, `classification`, `jobtitle`, `senioritydate`, `startdate`, `department`, `employees`, `employer`, `indirect`, `hourlyrate`, `hours`, `primary`, `tipcard`, `isprimary`, `employment` |
| `dept = Housekeeping` | people who work in (but not below) a department named "Housekeeping" (in any shop!) | `dept` will also respond to the following magic values: `unspecified`, `any`, `none` | Correlates with `bargainingunit`, `classification`, `jobtitle`, `senioritydate`, `startdate`, `department`, `employees`, `employer`, `indirect`, `hourlyrate`, `hours`, `primary`, `tipcard`, `isprimary`, `employment` |
| `indirect = "Big Shop"` | people who work at "Big Shop," but not at the top level of the structure | `indirect` will also respond to the following magic values: `any`, `none` | Correlates with `bargainingunit`, `classification`, `jobtitle`, `senioritydate`, `startdate`, `department`, `employees`, `employer`, `indirect`, `hourlyrate`, `hours`, `primary`, `tipcard`, `isprimary`, `employment` |
| `terminated = "Big Shop"` | people who were terminated from "Big Shop" | `terminated` will respond to the following magic values: `unspecified`, `any`, `none` | |
| `employment = multiple` | people who have more than one employer | `employment` will respond to the following magic values: `none`, `any`, `multiple`, `single` | Correlates with `bargainingunit`, `classification`, `jobtitle`, `senioritydate`, `startdate`, `department`, `employees`, `employer`, `indirect`, `hourlyrate`, `hours`, `primary`, `tipcard`, `isprimary`, `employment` |
| `isprimary = yes` | people who have a primary employer | `isprimary` will respond to the following magic values: `yes`, `no`. *usually used with an employer search ie* `isprimary = yes AND employer = "Higbees"` *will return people whose primary employment is at Higbees* | Correlates with `bargainingunit`, `classification`, `jobtitle`, `senioritydate`, `startdate`, `department`, `employees`, `employer`, `indirect`, `hourlyrate`, `hours`, `primary`, `tipcard`, `isprimary`, `employment` |

### Leadership
| Search Term | Finds... | Details |
|------------|-----------|----------|
| `turf = "Nell Brown"` | people who are employed at any shop or department (including children of these orgs) in the turf assigned to organizer "Nell Brown" | `turf` will respond to the following magic values: `any`, `none`, `me` |
| `formerleader = Maria` | people who were formerly led by an organizer named "Maria" | `formerleader` will respond to the following magic values: `any`, `none` |
| `leader = me` | people who are led by the current user | `leader` will respond to the following magic values: `any`, `none`, `me` |
| `leader = "John Doe"` | people who are led by an organizer named "John Doe" | `leader` will respond to the following magic values: `any`, `none`, `me` |

### Project-Specific & Custom Data Searches
#### Relationships
If the Broadstripes "relationship" function is enabled for your project, there will be one or more special "relationship types" defined, such as "Friend of …" or "Has influence with…" Each of these relationship types becomes a new search keyword.

| Search Term | Finds... | Details |
|------------|-----------|----------|
| `relatedperson = "Al Perez"` | people and orgs which have a relationship with "Al Perez" | `relatedperson` will respond to the following magic values: `any`, `none` |

#### External Systems
External system fields are searchable, similar to custom fields.

| Search Term | Finds... | Details |
|------------|-----------|----------|
| `legacyid <= 25000` | people or orgs with a LegacyID less than or equal to 25000 | `legacyid` will respond to the following magic values: `any`, `none` |
| `legacyid = none` | people or orgs which have no LegacyID code entered | `legacyid` will respond to the following magic values: `any`, `none` |

### Events
The examples below show how to search an event named "Card" that has two steps: "Signed" and "On File".

| Search Term | Finds... | Details |
|------------|-----------|----------|
| `card = signed` | people who have a check in the "Signed" step of the "Card" event | |
| `card = any` | people who have a check in either step of the "Card" event | |
| `cardsigned = Joelle` | people who had the "Signed" step of the "Card" event checked by a user named "Joelle" | |
| `cardsigned > "24 hours ago"` | people who had the "Signed" step of the "Card" event checked in the past 24 hours | |

### Call Center
| Search Term | Finds... | Details | Correlated Group |
|------------|-----------|----------|------------------|
| ` callpool = "Monday Grand Hotel"` | people who are a part of the call pool called Monday Grand Hotel | `callpool` will respond to the following magic values: `any`, `none` | Correlates with `callpool`, `calloutcome`, `called`, `caller`, `firstcall`, `lastcall` |
| `caller = Justin` | people who have been called by a user named Justin | `caller` will respond to the following magic values: `any`, `none` | Correlates with `callpool`, `calloutcome`, `called`, `caller`, `firstcall`, `lastcall` |
| `calloutcome = "reached"` | people who have had a call with the script-defined outcome "Reached" | In addition to any custom outcomes defined by the scripts in your project, `calloutcome` will work with the following magic values: `any`, `none`, and `interrupted` | Correlates with `callpool`, `calloutcome`, `called`, `caller`, `firstcall`, `lastcall` |
| `firstcall = "no answer/voicemail"` | people who were called but did not answer the call | | Correlates with `callpool`, `calloutcome`, `called`, `caller`, `firstcall`, `lastcall` |
| `lastcall = "reached"` | people who were reached when last called | | Correlates with `callpool`, `calloutcome`, `called`, `caller`, `firstcall`, `lastcall` |
| `called < 05/10/22` | people who were called before May 10, 2022 | `called` will respond to the following magic values: `any`, `none` | Correlates with `callpool`, `calloutcome`, `called`, `caller`, `firstcall`, `lastcall` |

### Texting
| Search Term | Finds... | Details | Correlated Group |
|------------|-----------|----------|------------------|
| `sms = delivered` | people who have successfully received a text message from a user | `sms` will respond to the following magic values: `incoming`, `outgoing`, `delivered`, `failed` | Correlates with `smsto`, `sms`, `smsfrom`, `smsdate` |
| `sms = "Howdy"` | people who had a text conversation containing the word Howdy | | Correlates with `smsto`, `sms`, `smsfrom`, `smsdate` |
| `smsto = 2025551234` | people who have been sent a text message to the virtual number 202-555-1234 | | Correlates with `smsto`, `sms`, `smsfrom`, `smsdate` |
| `sms = outgoing` | people who were sent a text message | | Correlates with `smsto`, `sms`, `smsfrom`, `smsdate` |

### Bulk Email
Each bulk email is assigned an id number. Below you will see examples of how to search for sent, opened, clicked, unsubscribed and failed emails using this unique id number.
| Search Term | Finds... | Details | Correlated Group |
|------------|-----------|----------|------------------|
| `emailsent = 6` | people who were sent an email message using email message/template #6 | |
| `emailopened = any` | people who opened any email message | |
| `emailclicked = 3` | people who clicked a link in email message #3 | |
| `emailunsubscribed = 7` | people who unsubscribed from receiving email messages after receiving email #7 | |
| `emailfailed = 3` | people who were sent email message #3 but the message failed | |

### Communications Permissions
| Search Term | Finds... | Details | Correlated Group |
|------------|-----------|----------|------------------|
| `emailopt = out` | people who are opted out of email contact | `emailopt` works with the following magic values: `out`, `in`, `unspecified` | Correlates with `emailmod`, `email`, `emailoptoutreason`, `emailoptinreason` |
| `emailopt > 2/15/19` | people who chose to opt in or out of email communications after February 15, 2019 | `emailopt` works with the following magic values: `out`, `in`, `unspecified` | Correlates with `emailmod`, `email`, `emailoptoutreason`, `emailoptinreason` |
| `emailopt = unspecified` | people who have unspecified email contact permissions | `emailopt` works with the following magic values: `out`, `in`, `unspecified` | Correlates with `emailmod`, `email`, `emailoptoutreason`, `emailoptinreason` |
| `emailoptinreason = verbal` | people who have verbally requested to receive email communications | `emailoptinreason` works with the following magic values: `paper_form`, `online_form`, `email`, `text`, `verbal`, `bu`, `external_system` | Correlates with `emailmod`, `emailopt`, `emailoptoutreason`, `email` |
| `emailoptinreason = bu` | people who are opted-in to email communications because they are a bargaining unit member | `emailoptinreason` works with the following magic values: `paper_form`, `online_form`, `email`, `text`, `verbal`, `bu`, `external_system` | Correlates with `emailmod`, `emailopt`, `emailoptoutreason`, `email` |
| `textopt = in` | people opted to receive text messages | `textopt` works with the following magic values: `out`, `in`, `unspecified` | Correlates with `textmod`, `phone`, `textoptoutreason`, `textoptinreason` |
| `textopt < 03/01/21` | people who opted in or out of text message communications before March 01, 2021 | `textopt` also responds to the following magic values: `out`, `in`, `unspecified` | Correlates with `textmod`, `phone`, `textoptoutreason`, `textoptinreason` |
| `textoptinreason = verbal` | people who have verbally requested to receive text communications | `textoptinreason` responds to the following magic values: `paper_form`, `online_form`, `email`, `text`, `verbal`, `bu`, `external_system` | Correlates with `textmod`, `phone`, `textoptoutreason`, `textoptinreason` |
| `textoptoutreason = verbal` | people who have verbally requested to not receive text communications | `textoptoutreason` will respond to following magic values: `paper_form`, `online_form`, `email`, `text`, `verbal`, `external_system` | Correlates with `textmod`, `phone`, `textoptoutreason`, `textoptinreason` |

### Contact Info Modification
| Search Term | Finds... | Details | Correlated Group |
|------------|-----------|----------|------------------|
| `cellmod > "40 days ago"` | people whose cell number was modified within the past days | | Correlates with `cell` |
| `emailmod < 10/22/22` | people who changed email info before October 22, 2022 | | Correlates with `emailopt`, `emailoptoutreason`, `emailoptinreason`, `emailmod`, `email` |
| `addressmod = yesterday` | people whose addresses were changed the previous day | | |
| `badaddressmod = 2/14/17` | people who have been modified with a bad address on said date | | |

### Map Shapes
| Search Term | Finds... | Details |
|------------|-----------|----------|
| `shape = "Ward 1"` | people whose primary address lies within the shape named "Ward 1" | In addition to the names of any custom shapes in your project, the `shape` keyword will work with the `any` and `none` magic values |
| `shapegroup = "Wards"` | people whose primary address lies within a shape group with "Wards" in its name | |
| `wards = "Ward 1"` | people whose primary address lies within the "Ward 1" shape of the "Wards" custom shape group | In addition to the names of any custom shapes in your project, the `shape` keyword will work with the `any` and `none` magic values |
