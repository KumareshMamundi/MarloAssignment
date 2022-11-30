BEGIN TRY
BEGIN TRAN

CREATE TABLE UserContacts (
	Id [uniqueidentifier] NOT NULL,
    FirstName [nvarchar](20) NOT NULL,
    MiddleName [nvarchar](20) NULL,
    LastName [nvarchar](20) NOT NULL,
    DOB [nvarchar](50) NULL,
    Email [nvarchar](50) NOT NULL,
    PhoneNumber [nvarchar](15) NOT NULL,
    Occupation [nvarchar](50) NULL,
    Company [nvarchar](50) NULL,
    Password [nvarchar](max) NOT NULL,
    CONSTRAINT PK_UserContacts PRIMARY KEY (Id, Email, PhoneNumber)
);

COMMIT TRAN

END TRY
BEGIN CATCH 
	ROLLBACK TRAN
END CATCH