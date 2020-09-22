---
title: "Automatic Data Processing"
weight: 300
---

## Automatic Data Processing

### Post Process

- Cleanup & diagnostic.
- Logger diagnostic.
- Sox (From wave to Flac).
- Files Encryption.
- Network diag to send files.

### Send to Cloud
Send files Data to the Cloud, in order to treat them.
<!--more-->
##### Transfer Files to the Cloud
Choose one of the following options:

#### Run a script
- After encrypting all the files  on **Encrypt** folder will be sended to the cloud.
- Open a terminal `Cntrl+Alt+t` and go to Script on the BabyLogger folder and run the script `pyhton3 send.py`.
  
#### Using FileZila software (FTP Client)
FileZilla may be used for secure file transfer using SFTP or FTPS between Windows clients and Windows or Unix servers.
  
  - **Set up a Server Connection**

  1. Start FileZilla. Click the the FileZilla icon on your desktop or in your Windows Start menu.
  2. From the File menu, select Site Manager.
  3. Click New Site
  4. Do the following:
     - In the Host box, enter the address of the server you're connecting to.
     - Click the arrow in the Server Type box, and then:
     - For FTPS transfers, select FTP over SSL (explicit encryption).
     - For SFTP transfers, select SFTP using SSH2.
     - In the Logontype box, click Normal.
     - In the User box, enter the username you were assigned for this server.
     - Click the Don't save password box.
5. Click Save and Exit.
The next time you open FileZilla, you can connect directly to this server using the options you chose. For instructions, see Transfer Files Using FileZilla below.

- **Transfer Files Using FileZilla**

1. Start FileZilla. Click the the FileZilla icon on your desktop or in your Windows Start menu. 
2. Click the arrow next to the Open Site Manager button, and then select the server you set up in the previous procedure.
3. In the Password box, enter your password for this sever, and then click OK.

4. FileZilla opens. Your computer (Local Site) is on the left and the server (Remote Site) is on the right. Navigate to different locations on either system. Drag and drop files or folders to copy files.
5. For more information, click Help in the FileZilla window.

### Algorithms

Store and treat the data on a cloud "Machine Learning Algorithmes"
(DiViMe’s tools)

<!--more-->



- Speaker Diarization
    - Modules and metrics
    - Speech activity detection (SAD)
    - Diarization
    - Results


- Word Count Estimation (WCE)
  - Results
- Resources