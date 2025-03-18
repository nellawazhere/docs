---
title: "Call Center Script Syntax"
date: "2023-09-27"
---

\[\["Syntax","Purpose","Sample"\],\["NODE","A NODE starts the script or a new page of the call center","NODE Date left employer\\n PROMPT <p>When did you leave work?</p>\\n CUSTOM FIELD Date left employer\\n LABEL Date left\\n NEXT Goodbye"\],\["PROMPT","This indicates a script or instructions that will be displayed to the caller.","PROMPT <p>Thanks for taking a minute to talk. We're getting in touch with union members to make sure that you're aware of the union's efforts.</p>\\nNEXT Petition pitch "\],\["CONDITION - WHEN - THEN","",""\],\["SUPPLEMENTAL","This is a section in the script where you can indicate any fields you want to appear throughout the entirety of the call. (every page)","SUPPLEMENTAL\\n CUSTOM FIELD Best phone\\n CUSTOM FIELD Best email\\n CUSTOM FIELD Call Center notes\\n LABEL Call notes "\],\["BUTTON","BUTTON creates a visual object that can be used to trigger an action including redirecting to a new node (page) or setting an event step.","BUTTON Wrong number \\n OUTCOME Wrong number\\n TARGET Mark phone bad"\],\["CUSTOM FIELD","CUSTOM FIELD indicates a area in which a person can enter or select data in an existing custom field.","NODE Send a text\\n PROMPT

If you get voicemail or just no answer, **DO NOT LEAVE VOICEMAIL**.

\\n

If the person you're calling has a cell, send them the following text:

\\n

> Hi, {{person.first\_name}}. This is {{caller.name}}. I am a \[your title\] in \[your department\]. I'm making calls with other members at our college to find out how people are doing and to let you know about a series of actions the union is taking over the summer to make sure that all of our members keep their jobs and stay safe during the pandemic. Do you have time to talk?

\\nCUSTOM FIELD Phone-bank text sent \\nLABEL Sent a text\\nEND"\],\["EVENT STEP","EVENT STEP directs the script to mark an event step as true or to check an event step.","NODE Petition info\\n PROMPT Later today, I'll send you a link to the petition. Would you prefer an email or a text?\\n BUTTON Email\\n EVENT STEP Petition : Email\\n TARGET Ask to Volunteer\\n BUTTONText message\\n EVENT STEP Petition : Text\\n TARGET Ask to Volunteer"\],\["LABEL","LABEL indicates an alternative label for a field that will be displayed in the current call center script.","NODE Call back later\\n PROMPT <p>We'll be happy to call another time. What would be best for you?</p>\\n CUSTOM FIELD Callback time\\n LABEL Best time/date to call back"\],\["OUTCOME","OUTCOME indicates the status of a call. Pre-defined outcomes include \\"Skipped\\" and \\"Interrupted.\\"","NODEStart\\n PROMPT

Hi, may I speak to {{person.first\_name}}?

\\n

My name is {{caller.name}}, and I am a \[your job title\] in \[your department\]. I'm calling to talk to you about what's going on at {{person.employer}} and about what our union is currently doing to organize and build power. What have you heard so far about what our union is doing?

\\n BUTTON Reached\\n OUTCOME Reached\\n TARGET Branch on Status \\n BUTTON Left employer\\n OUTCOME Left Employer \\n TARGET Date left employer"\],\["TARGET","A TARGET is pointer that indicates the next page or step after a button is pressed.","NODE Message to Active Members\\n PROMPT

Have you heard about the work the union is doing?

\\nBUTTON Yes\\nTARGET Petition pitch \\nBUTTON No\\nTARGET Retention work details"\],\["NEXT","The NEXT instruction gives the caller a \\"Continue\\" button that allows them to move on to the next node. (This is similar to the TARGET instruction.)","NODE Petition feedback\\n PROMPT Can you tell me what's keeping you from signing the petition? \\nCUSTOM FIELD Reason won't sign\\nNEXT Goodbye"\],\["END","END indicates the end of the call.","NODEGoodbye\\n PROMPT

Thank you for your time. It was nice talking to you.

\\nEND"\],\["","",""\]\]
