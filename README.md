# authentication-and-authorisation-with-expressjs.
stackUP

## INTRO
**Is "Delete functionality done after authentication" a good or bad idea based on my understanding? Let's find out!**

## Authentication & Authorization
Just a little insight of what i understood about this topic and what i found was the difference.

### Authentication
This was the process of verifying the identity of user, making sure they are identified as who they claim they are while using the system. I did it from the login process, where i allowed the users provide the required credentials and the system verifies this input.

### Authorization
Okay... for this process, it was just me using the system to determine what every **authenticated** user can perform on the system based off they roles. iT basically involves checking  the user's role/permisssions to determine what action they are allowed to perform and navigate them to the respective dashboard view. 

### The Elephant in the Room: IS "Delete functionality done after authentication" a good or bad idea based on my understanding?
At first, it seemed good to allow authenticated user have the access to delete. I mean authentication ensures that the user is who they claim to be right?, so it felt reasonable to assume that they should be able to delete an account or their own account by providing username to the account.

### However, upon closer inspection, this requirement raises several concerns:

- SECURITY: It looked harmless, but it can lead to security vulnerabilities.

- AUTHORIZATION: Just because a user is authenticated does not mean they have they should have the full permission to delete account by providing only a USERNAME 'cause what if the user is not the account owner, or what if they are trying to delete a critical system account?

- DATA INTEGRITY: Giving this access can have unintended consequences, such as orphaning related data or disrupting system dependencies. Without proper authorization and access controls, a user may delete their account without realizing the impact on the system.

## WHY IT'S A BAD IDEA
Based on my knowledge performing this quest, i came to a conclusion that the **delete user functionality done after authentication** is a bad idea. Authentication is not sufficient to ensure that a user has the necessary permissions to delete their own account.

## CONCLUSION:

By implementing a more robust authorization mechanism, we can ensure that users have the necessary permissions to delete their own accounts, while also protecting the system from security vulnerabilities and data integrity issues. 