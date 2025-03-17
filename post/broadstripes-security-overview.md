---
title: "Broadstripes Security Overview"
date: "2024-03-21"
---

# **Broadstripes Security Overview**

* * *

### **General security best practices**

- All information on the wire is SSL encrypted SHA-256.
- All remote access is done through private keys, with no password authentication.
- Server infrastructure is walled off via Amazon’s Virtual Private Cloud technology and security groups.

* * *

### **Database security**

- Data is private-key encrypted on disk.
- Credentials are not stored in source control.
- AWS "Virtual Private Cloud" and security groups ensure no direct access to databases.

* * *

### **Platform (server-level) security**

- All ports but 22 closed — SSH (secure shell) access only.
- Private key authentication only — no password authentication.
- AWS "Virtual Private Cloud" and security groups limit access to servers on an as-needed basis.
- All operating system libraries on all servers are updated at least semi-annually to ensure all security patches and upgrades are in place.
- All AWS admin accounts are secured by multi-factor authentication (MFA).

* * *

### **Application Level Security**

- All requests are SSL-encrypted with state-of-the-art RSA encryption (SHA-256).
- Passwords are hashed using a one-way (cryptographic) function and a salt. This means we have no direct access to any user’s password, and dictionary-based attacks would be prohibitively resource-intensive.
- Two-factor authentication is available at customer request on a per-project basis.
- Our application platform, Ruby on Rails, has built-in security features that check user input for cross-site request forgery (CSRF), cross-site scripting (XSS), and SQL injection. Our code makes full use of these features.
- All code assets are served internally (standard libraries such as jQuery are stored locally, not retrieved from the cloud).
- We use 32-character hexadecimal globally unique identifiers (GUIDs) to identify records, rather than serial integers. This means that our URLs are not predictable.
- Administrators have significant control of user privileges and access.
- Our database-generated audit trail and report request history give us significant visibility into the activities of all users.
