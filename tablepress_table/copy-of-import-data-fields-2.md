---
title: "Test for Import Data Fields"
date: "2024-04-12"
---

\[\["Person name","","","",""\],\["Data Field/Column ","Matching?","Details","Example","Works with"\],\["Each contact in your spreadsheet must have a name, whether a person or an organization. Broadstripes gives you a lot of flexibility when importing people's names, but storing each part of a person's name in a separate column is important. (You can find instructions on separating a full name column into first, middle and last name columns [here](\"https://help.broadstripes.com/help-articles/tips-tricks/splitting-names-into-separate-columns-for-imp/\")) \\nFor people, name fields include:","#colspan#","#colspan#","#colspan#","#colspan#"\],\["Title","","Traditionally, this is an abbreviated prefix like \\"Ms.\\" or \\"Mr.\\", \\"Dr.\\", \\"Rev.\\", and so on. It can, of course, be ignored.","Correct inconsistencies in the use of abbreviations and periods (e.g., Dr., Dr, Doctor) before importing.","Person"\],\["First Name\\r\\n","![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/10/redcheck.png\")","The \\"given\\" name of an individual. Examples: \\"Louise\\", \\"Michael\\", \\"Esteban\\", and so on.\\r\\nCan be used for matching and such. Made for spacing\\r\\n","First, Middle, and Last names must be in separate columns.","Person"\],\["Middle name\\r\\n","![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/10/redcheck.png\")","This may be the full name or just an initial.","First, Middle, and Last names must be in separate columns.\\r\\n![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/09/Names-Uploads.png\")","Person"\],\["Last name\\r\\n","![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/10/redcheck.png\")","The family name of the person","First, Middle, and Last names must be in separate columns.","Person"\],\["Nickname","","In this column, you can add any nicknames that could help you identify or keep track of your workers. This field allows you to retain the worker's legal name in your data while allowing people to search for them by the name they are commonly called.","The familiar name by which the person is known. \\r\\nExamples:

\\"Lou\\", \\"Mike\\", or \\"Steve\\"

","Person"\],\["Suffix","","Anything the person adds to their name after the last name. Examples: \\"Jr.\\" and \\"III\\".","Any suffixes such as

Jr., Senior, II, III.

","Person"\],\["Organization name","","","",""\],\["Data Field/Column ","Matching?","Details","Example","Works with"\],\["Organization Name\\r\\n","![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/10/redcheck.png\")","The official name of the organization","

Saint Vincent Hospital, MegaBurger, etc.

","Organization"\],\["Nickname","","If the organization is commonly called something other than its official name, input it here.","Saint Vincent Hospital's nickname could be **SVH**.","Organization"\],\["Contact info","","","",""\],\["Data Field/Column ","Matching?","Details","Example","Works with"\],\["Contact info includes phone, email, fax, and messenger info along with communication permissions. Contact info needs to be categorized as Home, Personal, Business, or Other. ","#colspan#","#colspan#","#colspan#","#colspan#"\],\["Phone","![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/10/redcheck.png\")","The 10 digit phone number","The phone number column will accept a standard 10 digit phone number

261-444-7899, (718) 184-6654, etc

","All"\],\["Phone Notes","","This field contains any notes or information you want to record about the contact's phone number.","New notes will not be imported if the notes field in the app already contains data.","All"\],\["Phone Bad","","The \\"Phone Bad\\" fields are numbers you want to retain but are invalid.","When importing a bad phone number, more than one column is necessary. The first column (Column Header: Business Cell Phone) will include the phone number. There must be an additional column (Column Header: Business Cell Phone Bad) that will indicate a bad phone number. The applicable rows will contain one of the following in the latter column:

- **Bad:** Yes, True, T, 1, X
- **Not Bad:** No, False, F, 0

","All"\],\["Cell Phone","","The 10-digit mobile phone number","The phone number column should not include \*","All"\],\["Cell Phone Notes","","This field contains any notes or information you want to record about the contact's cellular number.","

Theresa turns off her cell phone after 7 pm

\\r\\n\\r\\nNew notes will not be imported if the notes field in the app already contains data.","All"\],\["Cell Phone Bad","","The \\"Phone Bad\\" fields are numbers you want to retain but are invalid.","When importing a bad phone number, more than one column is necessary. The first column (Column Header: Business Cell Phone) will include the phone number. There must be an additional column (Column Header: Business Cell Phone Bad) that will indicate a bad phone number. The applicable rows will contain one of the following in the latter column:

- **Bad:** Yes, True, T, 1, X
- **Not Bad:** No, False, F, 0

","All"\],\["Cell Phone Permission","","The Cell Phone Permission data field indicates if a contact gives permission to receive phone communications.","A Cell Phone Permission entry can be one of two values or blank:

- Opted in
- Opted out

![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/11/opt-permissions-Data-Import-300x85.png\")","All"\],\["Cell Phone Permission Reason","","The \\"Cell Phone Permission Reason\\" data field records how a contact gave permission to contact or to opt out of communication.","The following permission reasons may be entered in this field/column:

- Signed paper form
- Submitted online form
- Clicked emailed link (or sent an email)
- Sent a text message
- Gave verbal instructions
- Is a bargaining unit member
    
    (Opted-in only)
    
- Set in external

","All"\],\["Pager Notes","","This field contains any notes or information you want to record about the contact's pager number.","If the notes field already contains data, new notes will not be imported.\\r\\n\\r\\n

John is a driver. It may take hours before he is able to respond.

","All"\],\["Pager Bad","","The \\"Pager Bad\\" field is a phone number that you want to retain but are not valid.","When importing a bad phone number, more than one column is necessary. The first column (Column Header: Business Pager) will include the phone number. There must be an additional column (Column Header: Business Pager Bad) that will indicate a bad pager number. The applicable rows will contain one of the following in the latter column:

- **Bad:** Yes, True, T, 1, X
- **Not Bad:** No, False, F, 0

","All"\],\["Email\\r\\n","![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/10/redcheck.png\")","The email address of the contact","

jane@example.com

","All"\],\["Email Notes","","The Email Notes field should contain any relevant information about a contact's email.","

This email address should be used if Ken does not respond to the primary

\\r\\n\\r\\nNew notes will not be imported if the notes field already contains data.","All"\],\["Email Bad","","The \\"Email Bad\\" field is an email that you want to retain but is not valid.","When importing a bad email address, more than one column is necessary. The first column (Column Header: Other email) will include the email address. There must be an additional column (Column Header: Other Email Bad) that will indicate a bad email address. The applicable rows will contain one of the following in the latter column:

- **Bad:** Yes, True, T, 1, X
- **Not Bad:** No, False, F, 0

","All"\],\["Email Permission","","The Email Permission data field indicates if a contact gives permission to receive email communications.","An Email Permission entry can be one of two values or blank:

- Opted in
- Opted out

![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/11/email-optin-permissions2.png\")","All"\],\["Email Permission Reason","","The \\"Email Permission Reason\\" data field are a record of how a contact gave permission to contact or to opt out of communication.","The following permission reasons may be entered in this field/column:

- Signed paper form
- Submitted online form
- Clicked emailed link (or sent an email)
- Sent a text message
- Gave verbal instructions
- Is a bargaining unit member
    
    (Opted-in only)
    
- Set in external

","All"\],\["Fax","","The fax number of a contact","

261-444-7899

\\r\\n\\r\\nThe phone number column should not include \*\\r\\n","All"\],\["Fax Notes","","Any notes or information you want to record about the contact's fax number.","New notes will not be imported if the notes field already contains data.\\n\\n

Fax number is a shared line. Confirm receipt with follow-up call after fax., etc

","All"\],\["Fax Bad","","The \\"Fax Bad\\" fields are fax numbers that you want to retain but are not valid.","When importing a bad fax number, more than one column is necessary. The first column (Column Header: Home Fax) will include the fax number. There must be an additional column (Column Header: Home Fax Bad) that will indicate a bad fax number. The applicable rows will contain one of the following in the latter column:

- **Bad:** Yes, True, T, 1, X
- **Not Bad:** No, False, F, 0

","All"\],\["Pager","","The pager number of the contact","The phone number column will accept a standard 10 digit phone number

261-444-7899, (718) 184-6654, etc

","All"\],\["Im","","The URL or handle for Instant Messenger","Enter the person's instant messenger info here.","All"\],\["Im Notes","","Any notes or information you want to record about the contact's Instant Messenger.","If the notes field already contains data, new notes will not be imported.","All"\],\["Im Bad","","The \\"Im Bad\\" fields are instant messenger urls or handles that you want to retain but are not valid.","When importing a bad IM handle, more than one column is necessary. The first column (Column Header: Personal IM) will include the instant messenger handle. There must be an additional column (Column Header: Personal IM Bad) that will indicate a IM handle. The applicable rows will contain one of the following in the latter column:

- **Bad:** Yes, True, T, 1, X
- **Not Bad:** No, False, F, 0

","All"\],\["Person Address","#colspan#","#colspan#","#colspan#","#colspan#"\],\["Data Field/Column ","Matching?","Details","Example","Works with"\],\["People addresses are categorized as Home, Business, or Other. Addresses may be separated by street address, city, state, and zip, or you may have one column with the complete address.","#colspan#","#colspan#","#colspan#","#colspan#"\],\["Address","","The street address of the contact","

100 Shepard Ave., 658 N. Main St. etc.

\\r\\n\\r\\nIf you do not have your address formatted in separate columns, you may alternatively enter the full address in this column, e.g.

100 Shepard Ave., Tuscaloosa, AL 35487

\\r\\n![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/08/Home-Address-Uploads.png\")","Person"\],\["Unit","","A unit or suite number in the contact's address.","

3rd Fl, Unit 454, Apt 3B, etc

","Person"\],\["City","","The city the address is located in","

Tuscaloosa, Springfield, Houston, etc.

","Person"\],\["State","","The two-letter abbreviation for the state.","

CT, NY, NV, etc

","Person"\],\["Zip","","The 5-digit zip code or 9-digit zip code, including the plus-four code.","

37042, 73099-1039, etc

","Person"\],\["Address Notes","","Any notes or information you want to record about the contact's address.","

Doorbell does not work. Knock hard.

\\r\\n\\r\\nThe column header should include the appropriate category:

- Home Notes
- Business Notes
- Other Notes

","Person"\],\["Address Bad","","The \\"Address Bad\\" fields are addresses that you want to retain but are not valid.","When importing a bad address, more than one column is necessary. The first column(s) (Column Header: Home Address) will include the address. There must be an additional column (Column Header: Home Bad Address) that will indicate a bad address. The applicable rows will contain one of the following in the latter column:

- **TRUE:** Yes, True, T, 1, X
- **FALSE:** No, False, F, 0

","Person"\],\["Organization Address","#colspan#","#colspan#","#colspan#","#colspan#"\],\["Data Field/Column ","Matching?","Details","Example","Works with"\],\["Organization addresses are categorized as Business or Other.Addresses may be separated by street address, city, state, and zip, or you may have one column with the complete address.","#colspan#","#colspan#","#colspan#","#colspan#"\],\["Address","","The street address of the contact","

100 Shepard Ave., 658 N. Main St. etc.

\\r\\nIf you do not have your address formatted in separate columns, you may alternatively enter the full address in this column, e.g.

100 Shepard Ave., Tuscaloosa, AL 35487

![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/10/addressupload2-300x82.png\")","Organization"\],\["Unit","","A unit or suite number in the contact's address.","

3rd Fl, Unit 454, Apt 3B, etc.

","Organization"\],\["City","","The city the address is located in","

Tuscaloosa, Springfield, Houston, etc.

","Organization"\],\["State","","The two-letter abbreviation for the state.","

CT, NY, NV, etc

","Organization"\],\["Zip","","The 5 digit zip code or9 digit code including the plus-four code.","

37042, 73099-1039, etc

","Organization"\],\["Address Notes","","Any notes or information you want to record about the organization's address.","

Doorbell does not work. Knock hard.

\\r\\nThe column header should include the appropriate category:

- Business Notes
- Other Notes

","Organization"\],\["Address Bad","","The \\"Address Bad\\" fields are addresses that you want to retain but are not valid.","When importing a bad address, more than one column is necessary. The first column(s) (Column Header: Home Address) will include the address. There must be an additional column (Column Header: Home Bad Address) that will indicate a bad address. The applicable rows will contain one of the following in the latter column:

- **TRUE:** Yes, True, T, 1, X
- **FALSE:** No, False, F, 0

","Organization"\],\["Employment","#colspan#","#colspan#","#colspan#","#colspan#"\],\["Data Field/Column ","Matching?","Details","Example","Works with"\],\["When importing employment, you will be connecting people to their employers. You may choose to update existing employment with new information or to create separate employment in the configuration section of the data import upload page.","#colspan#","#colspan#","#colspan#","#colspan#"\],\["Employer","![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/10/redcheck.png\")","The name of the organization that is the employer.","The main name of an organization \\r\\n

e.g. Grand City Hospital, The Grand Hotel, Mega University, etc.

\\r\\n\\r\\nIf the employer does not exist in your project, a new organization will be created.","Person"\],\["Department","![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/10/redcheck.png\")","An employer may have different sections, floors, units, etc.A department is a child organization of an employer.","The name of the department

e.g. Accounting, Concierge, North Campus, etc.

\\r\\nIf the department does not exist in your project, a new organization will be created in your project.","Person"\],\["Subdepartment","![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/10/redcheck.png\")","Larger organizations may be subdivided into multi-level structures. A subdepartment is a division of a department which is part of a employer.","The name of the subdepartment \\r\\n

e.g. 3rd Floor, West Pavilion, VIP Lounge, etc.

\\r\\nIf the subdepartment does not exist in your project, a new organization will be created in your project.\\r\\n![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/08/employer-Uploads-2.png\")","Person"\],\["Subsubdepartment","![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/10/redcheck.png\")","Larger organizations may be subdivided into multi-level structures. A subsubdepartment is a division of a second level department.","The name of the subsubdepartment

e.g. Clerical, Special Units, etc.

\\r\\nIf the subsubdepartment does not exist in your project, a new organization will be created in your project.","Person"\],\["Subsubsubdepartment","![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/10/redcheck.png\")","Larger organizations may be subdivided into multi-level structures. A subsubsubdepartment is a division of a third level department.","The name of the subsubsubdepartment

e.g. Casual, Level E, etc.

If the subsubsubdepartment does not exist in your project, a new organization will be created in your project.","Person"\],\["Classification or Job Title","","Classification/Job Title is the title/role of an employee.","

Housekeeper, Unit Clerk II, Teacher's Assistant, etc.

The header of this column will be either **Classification** or **Job Title** depending on your project's settings.\\r\\n![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/08/Job-Title-Upload.png\")","Person"\],\["Parent Organization ID","","This column is used to indicate that the organization is a child of another organization or subdepartment.You may use any unique id to identify the parent organization. This can be the Broadstripes ID or an external system ID.","The column header for this field/column should start with \\"Parent Organization\\" and the name of type of ID.\\r\\n

Parent Organization ID, Parent Organization Legacy CRM ID, Parent Organization NetID, etc.

",""\],\["Employee Number","","This field records the worker's employee number.","This field is a free-form text box that will accept any combination of text that is applicable.","Person"\],\["Employee Status","","This field can indicate the status of worker","

Floater, Permanent, Temp, etc

\\nThe status is not pre-defined. You may use whatever term is appropriate for your project.","Person"\],\["Work Location","","This field can be used to provide location details for a worker","

Fordham Road, Front of House, etc.

","Person"\],\["Bargaining Unit Member","","This field indicates if a person is a member of a bargaining unit.This is a yes/no checkbox, which may or may not suit your union\\u2019s needs for keeping track of members.If you choose not to use this field, there are other tools in Broadstripes to track union membership.","This column may contain one of the following values for each contact:

- **TRUE:** Yes, True, T, 1, X
- **FALSE:** False

![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2024/04/BUM-Import.png\")\\nAn import that includes Bargaining Unit Members should include employment information. (Employer, Department, etc.)","Person"\],\["Date Ended","","The date the employment terminated.","This field records the last date of employment in MM/DD/YYYY format.","Person"\],\["Date Last Paid","","The date the worker last received their wages","This field records worker's last payday in MM/DD/YYYY format.","Person"\],\["Hourly Rate","","This field records the worker's hourly wage","

e.g. 17.23, 20.00, etc.

","Person"\],\["Hours","","This field records the hours worked.","

32.5, 17:15, etc.

","Person"\],\["Seniority Date","","","This field records worker's seniority date in MM/DD/YYYY format. \\r\\n

01/22/2019, 11/03/1982, etc.

","Person"\],\["Recent Hire Date","","","This field records worker's most recent hire date (in the case of a rehire) in MM/DD/YYYY format.\\r\\n

01/22/2019, 11/03/1982, etc.

","Person"\],\["Start Date","","","This field records worker's start date in MM/DD/YYYY format.\\r\\n

01/22/2019, 11/03/1982, etc.

","Person"\],\["Is Primary","","When a worker has more than one concurrent employments, this field will indicate which employment is the primary.","This column may contain one of the following values for each contact:

- **TRUE:** Yes, True, T, 1, X
- **FALSE:** No, False, F, 0

\\n![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/08/employer-Uploads-3.png\")","Person"\],\["Tip Card","","\*\*\*\*","This column may contain one of the following values for each contact:

- **TRUE:** Yes, True, T, 1, X
- **FALSE:** No, False, F, 0

","Person"\],\["Full Part Time","","This field ccontains the worker's full time or part time status.","

Full-time, part-time, Casual, etc.

","Person"\],\["Leadership","#colspan#","#colspan#","#colspan#","#colspan#"\],\["Data Field/Column ","Matching?","Details","Example","Works with"\],\["Turf Leader\*\*\*","","Turf Leader indicates the lead organizer of a particular shop or department.","","Person"\],\["Leader Role","","The Leader role provides a way to categorize and identify the leaders within a bargaining unit or worker group. Account admins can create leader roles as needed for the project.","

Commitee, Key Leader, Target, etc.

\\r\\nIf the leader role category of an imported contact, does not exist, a new leader role will be created.","Person"\],\["Leader Broadstripes ID","","The Broadstripes ID is a set of 6 alphanumeric characters that are unique identifiers exclusive to the app.\\n","This field contains the Broadstripes ID of the leader of a group.\\n

UTO-559, LST-470, etc.

\\n","Person"\],\["Leader Unique ID","","The unique identifier of an external system.","This spreadsheet column should be mapped to the Broadstripes field named after the external system (i.e. \\u201cBig Hospital ID\\u201d if you named the external system \\u201cBig Hospital\\u201d).The Broadstripes ID is also a unique ID.","Person"\],\["Follower Broadstripes ID","","The Broadstripes ID is a set of 6 alphanumeric characters that are unique identifiers exclusive to the app.\\n","This field contains the Broadstripes ID of the follower of a worker.\\n

UTO-559, LST-470, etc.

\\n","Person"\],\["Follower Unique ID","","The unique identifier of an external system that belongs to a follower. ","This spreadsheet column should be mapped to the Broadstripes field named after the external system (i.e. \\u201cFollower Big Hospital ID\\u201d if you named the external system \\u201cBig Hospital\\u201d).The Broadstripes ID is also a unique ID.","Person"\],\["Basic info","#colspan#","#colspan#","#colspan#","#colspan#"\],\["Data Field/Column ","Matching?","Details","Example","Works with"\],\["Relationships","","The relationships field allows you to ability to track special relationships between individual workers.Some relationships are automatically available for use, such as

Friend of, neighbor of, etc.

\\r\\nMore relationships can be created by Broadstripes support upon admin request.","The header of this column should include the type of relationship, e.g.

Family member of, Connected to, Members include.

\\r\\nThe values will include the Broadstripes ID of the person or organization you want to connect.![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/09/relastionships-upload.png\")","All"\],\["Notes","","The notes fields is a built-in memo field which can be used to store any textual information you choose about a contact.","When you match to an existing contact and upload new data to the Notes field, it is appended to any existing text already in the field. This behavior is unique to this field.","Person"\],\["Party","","If your project includes voter data, you can use the Party field to enter registered voters\\u2019 party affiliation.","Be sure to check for spelling and grammatical errors.If a value does not exactly match an existing value a new one will be created. \\r\\nYou should also check for reiterations of the same party. For example, \\"Dem\\" and \\"Democrat\\" will create two separate values even though they signify the same party.","Person"\],\["Union Member","","This is a yes/no checkbox, which may or may not suit your union\\u2019s needs for keeping track of members.If you choose not to use this field, there are other tools in Broadstripes to track union membership.","The Union Member field may contain one of the following values for each contact:

- **TRUE:** Yes, True, T, 1, X
- **FALSE:** False

","Person"\],\["Social Groups\*\*\*\*\*\*\*","","","","Person"\],\["Birth Date","","Birth dates are useful when trying to correctly identify workers with common names or the same name, and also may be used for matching employer records.","This field records worker birth dates in MM/DD/YYYY format.","Person"\],\["Call Pools","","","\*\*\*\*","Person"\],\["Website","","Both people and organizations can have a website. For workers, this field can be useful for storing Facebook or Twitter account links, blog pages, and so on. The data in this field will be displayed as a Web link.","\*Insert full URLs\\r\\n

https://www.example.com

","All"\],\["Contact Type","","Broadstripes project admins can create \\u201ccontact types\\u201d to capture the distinctions between different types of people and organizations. For example, an external organizing campaign might have two types of people: \\u201cWorkers\\u201d and \\u201cManagers.\\u201d A community organizing campaign might have \\u201cMedia,\\u201d \\u201cElected Officials,\\u201d and \\u201cNeighborhood Leaders.\\u201d Examples of organization sub-types in a healthcare campaign might be \\u201cHospital,\\u201d \\u201cDepartment,\\u201d \\u201cClinic,\\u201d and so on. Contact type can\\u2019t be set in bulk anywhere else, so this can be a handy feature of the import.","The contact type must exist in the project already. ![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/12/Contact-Type-Data-Import-300x112.png\")\*","All"\],\["Unique IDs\\r\\n","![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/10/redcheck.png\")","If you\\u2019re uploading data from an external system for the first time, you will probably want to map the column containing the unique ID from that system to the Broadstripes field intended to capture it (the \\u201cexternal system ID\\u201d that was automatically created when you or another admin created the external system).For example, if you have an excelsior list (aka \\u201cthe e-list\\u201d) list provided by an employer, it will often (though not always) have a column containing a unique ID for each worker, under a header like \\u201cID,\\u201d \\u201cEmployee ID,\\u201d etc. In order to capture this unique ID and match on it when an updated list is provided, a Broadstripes admin should create an external system named \\u201cE-list\\u201d or \\u201cEmployer\\u201d (or whatever makes sense to the organizing team). Doing that will automatically create a field named \\u201cE-list ID\\u201d or \\u201cEmployer ID\\u201d in Broadstripes.","This spreadsheet column should be mapped to the Broadstripes field named after the external system (i.e. \\u201cBig Hospital ID\\u201d if you named the external system \\u201cBig Hospital\\u201d).The Broadstripes ID is also a unique ID.","All"\],\["Events","","You can use events to record and track literal union-organized events, like rallies and marches, but you can also use events to keep track of important one-time information or occurrences, like petition signatures or signing a union card. You can even use events for answering multiple yes/no questions about the workers in the bargaining unit. For more information on using events, click [here.](\"https://help.broadstripes.com/help-articles/admin-tools/data-tools-admin/creating-an-event/\") ","Importing event data requires that you create an event, and then create as many \\"steps\\" under the event as you need to capture your data.The column header for Events should start with the event name followed by a colon and the the step name.\\r\\n For example: If your project has an event called \\"July Rally\\" and and event step called \\" Invited\\", the column header would be \\u201cJuly Rally: Invited\\u201d. Mark the applicable contacts with an X in their corresponding row of the column![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/10/eventsupload03.png\")","All"\],\["Lists","","Lists give you an easy way to manually tag individuals who you want to track as a group f'or any reason. You can find additional information on tag lists [here.](\"https://help.broadstripes.com/help-articles/admin-tools/data-tools-admin/tag-lists/\")","To add a contact to a list, you need to create a column whose header starts with \\u201cList:\\u201d followed by the name of the list that you want updated ( A new list will be created if the name provided does not match an existing list.) In the rows of the corresponding contacts enter **X** to add that contact to the list.![\"\"](\"https://help.broadstripes.com/wp-content/uploads/2023/08/List-Uploads.png\")","All"\],\["Assessment or Code","","Assessments or codes are excellent way to assess where the workers stand in relation to the campaign\\u2019s goals","Assessments must be imported in numeric form, and must fall within the range of the possible values in the project. Depending on your project settings, the column header will either be **Assessment** or **Code**.","All"\],\["Custom fields","#colspan#","#colspan#","#colspan#","#colspan#"\],\["Data Field/Column ","Matching?","Details","Example","Works with"\],\["Custom fields - Checkboxes","","Checkboxes are used to indicate data that can either be true or false.","The header of this column should be the actual name of the custom field. \\r\\nThis column may contain one of the following values for each contact:

- **TRUE:** Yes, True, T, 1, X
- **FALSE:** No, False, F, 0

","All"\],\["Custom fields - single line text fields","","This field may be used for free-form text, a date or number.","If data already exists in this field for a contact, it will be overwritten with new data in an import.","All"\],\["Custom fields - multi-line text fields","","Multi-line text input fields allow free-form text with line breaks.","If data already exists in this field for a contact, it will be overwritten with new data in an import.","All"\],\["Custom fields - Dropdown chooser","","Dropdown choosers allows a select set of values for a data field. This field allows one value.","If the value to be imported into Broadstripes is not already an option in the dropdown chooser, you must enable the option to **\\"Allow imports to add options.\\"** \\r\\nThis feature will allow the app to create new options via data import.\\r\\nYou can implement this by selecting it on the custom field's edit page.","All"\],\["Custom fields - Multiple selection chooser","","Multiple selection choosers allows a select set of values for a data field. This field may have more than one value.","Values are separated by commas, e.g.

Healthcare, Wages, Coverage

\\r\\nThe values included in an import will overwrite the existing data in this field. \\r\\nIf the value to be imported into Broadstripes is not already an option in the dropdown chooser, you must enable the option to **\\"Allow imports to add options.\\"** \\r\\nThis feature will allow the app to create new options via data import.\\r\\nYou can implement this by selecting it on the custom field's edit page.","All"\],\["Custom fields - Sortable lists","","Sortable lists are usually used to indicate levels of importance or priority by allowing the adjustment of a value's position.","If the value to be imported into Broadstripes is not already an option in the dropdown chooser, you must enable the option to **\\"Allow imports to add options.\\"** \\r\\nThis feature will allow the app to create new options via data import.\\r\\nYou can implement this by selecting it on the custom field's edit page.","All"\],\["Custom fields - Time","","This field is used to record a time of an event such as a petition signing, etc.","

01:23 PM, 2:47, etc.

","All"\],\["Timeline Items","#colspan#","#colspan#","#colspan#","#colspan#"\],\["Data Field/Column ","Matching?","Details","Example","Works with"\],\["A timeline item is a record of an occurrence, including when the event occurred, who created the item, who contacted the person, and a description. This appears on a contact's timeline. To create a timeline item with a data import, you must indicate those details in to seperate columns:","#colspan#","#colspan#","#colspan#","#colspan#"\],\["Timeline Item Type","","This column indicates how the timeline item will be categorized.","The timeline item type may include:

- Note
- Group Meeting
- House Visit
- One-on-one
- Phone Call
- User-defined timeline item type (e.g. Training, Information Session, etc.)

","All"\],\["Timeline Item Date","","The date on which interaction or event occured.","

3/15/2022, 11/7/14, etc.

","All"\],\["Timeline Item Description","","This column is where you would describe the details of the occurence.","

Henrietta seems to have a better understanding of what a union would mean for her and her family. She said she would attend the next meeting on Tuesday.

","All"\],\["Timeline Contacted by Unique ID","","This data field identifies the person who contacted this person using a Unique ID","This must be a unique ID such as a Broadstripes ID or an external system ID","All"\]\]
