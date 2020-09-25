---
title: "Getting Started"
weight: 200
---

## Getting Started



### Time Synchronization

A phone application has been developed to allow you to synchronize the date and time of the BabyLogger depending on your time zone.

##### Instructions:

- **What is needed: a phone application (Android only)** :
  - An Android phone is required to use the application (no IOS support currently).
  - Download the time synchronization application, [here](https://s3.console.aws.amazon.com/s3/object/packages.babycloudlab.com/ble_init.apk?region=eu-west-1&tab=overview) onto your phone.
  - Alternatively, you can also download the application from the email received by the *Echolalia Team*, by double clicking on the **[APK](xxx)**.
  - Make sure that you have the application installed on your phone.
    
- **The process** :
  - Power on the bluetooth of your phone.
  - In order to modify the date and time on the BabyLogger, you need to charge the logger AND be connected to the phone application via the bluetooth of the logger.
  - Pair the phone with the logger bluetooth name **"BabyLogger"** with password **"123456"**. You have 10 minutes to update the time. If the process is not completed during that time, you will have to start over.
  - Once the logger is connected to your phone, the LED of the logger will change from RED (charging  mode) to <span style="color:green">**GREEN** </span>/<span style="color:red">**RED** </span>.
  - Open the application and click on the **Update Time** button.
  - Now, the LED will switch to <span style="color:red">**RED** </span> only, which means that the Baby Logger has correctly synchronized with your Timezone.

**Note: you should synchronize the time of your logger, right after receiving it, and also every time that it has been powered off for several weeks.**
Watch this [video](/), for the process


### Environment Installation

This section allows the user to set up the environment for the BabyLogger to work in the best way.


### SD Card

####  How to format the SD card?
With 64 GO SD card, Create two partitions with the first one containing 95% of the memory area and the second one 5%. The card should be formatted in the NTFS File System, and the partitions should be created in a fixed order (audio first, accelerometer second). The table below gives the names and sizes of the partitions that should be created according to your SD card size.



Partition| Name of partition| partition_size | partition_type| size_unity_allocation
--- |--- |--- | --- | ---
Partition 1 | BL_AUDIO|60.8GB |EXFAT| 64Ko 
Partition 2 | BL_MOTION |3.2GB |FAT32| 32Ko 

#### How to create a partition on a new SD card?
- You can follow this [tutorial](https://www.youtube.com/watch?v=OZVFvBzQRbs&feature=youtu.be) that we made on windows and it can help you.
 

- Or you can follow this link, that explain this process for each OS:
    - [Windows](https://www.wikihow.com/Partition-an-SD-Card#Windows_sub) 
    - [Linux](https://askubuntu.com/questions/240f497/partitioning-sd-card) 
    - [MacOs](https://www.wikihow.com/Partition-an-SD-Card#Mac-OS-X_sub)



### Decrypting the Data
All data recorded with the BabyLogger are encrypted for data protection. If the logger is lost, nobody except for the registered user will be able to decrypt the data. For that reason, do not share the downloaded software as well as the security key folder.
This is a [Tutorial](/), to explain how to decrypt data on MacOs, the same process can be follow on the other OS.
<!--more-->

**<p style="color:red">NOTE:</p>**
    please make sure your computer has the proper protection (antivirus, hard drive encryption, password logins). It is going to contain unencrypted sensitive personal data collected in families; you are responsible for the proper protection of this data.
 
#### Download the BabyLogger software
   - Download the BabyLogger's Software Package corresponding to your computer's operating system from the link that you received on the email.
     -  [Linux](/Linux_babylogger_decrypt.zip) .
     -  [MacOs](MacOS_babylogger_decrypt.zip) .
     -  [Windows](Windows_babylogger_decrypt.zip). 
   - Enter the passcode given on the email  to unzip the folder OSname_babylogger_decrypt.
 . This step will create a **BabyLogger** folder.
   - Inside the folder, there is an executable file to launch the decryption software(babylogger_OSname) and three subfolders: 
     - **Raw_Data :** which contains temporary files for transfer.
     - **Decrypted_Data:** which contains decrypted data.
     - **Key:** which contains the keys associated with your loggers. **DON'T EVER CHANGE THE KEY FOLDER CONTENT**
  

#### How to decrypt the BabyLogger data?
Once you start transferring data from the MicroSD, all the data needs to be transferred and then deleted (otherwise the logger could be confused and overwrite the remaining data when it is in recording mode again).

 1. Launch the decryption process by choosing one of these 2 options:
  - A) Double-click on the **babylogger_OSname** app icon to launch the decryption process.
  
  - B) If you have a problem on double click app, navigate to the **Osname_babylogger_decrypt** folder according to your OS and run the following command: **./babylogger_OSname** .
   - **example**:
  
    if you use MacOS, navigateto the  *MacOS_babylogger_decrypt* folder and tape ./babylogger_MacOS on the terminal.
  *(if you encounter any problem, see the FAQ section)*.
  
 2. The decrypting process creates the audio (.wav) and accelerometer files in the “Decrypt_Data” folder; the files are now ready to be copied for backing up. Each file has now a unique name (LoggerID and date).
 3. You can then copy them for backup or move them for further processing. The files have now a unique name (associated with the logger ID and date).
 4. Delete all remaining files in the **Raw_data** folder.
 5. Delete all files from both partitions of the MicroSD.


<span style="color:red">**WARNING:** </span>.


 Be careful, if using more than one logger, transfer and decrypt the first logger’s raw files before transferring the second logger’s raw files. All loggers use the same file name pattern, therefore you will overwrite the first logger’s raw files if they are not decrypted before transferring files from the second logger.
#### The decrypted files
The decrypted files can be found in the **Decrypt_Data** folder. You will find three types of files :

 1. **Audio files** (XX-Audio.wav): audio files recorded with frequency of 16kz, 16 bits and 4 channels. their duration is no longer than 30mins long.
    - Audio file example: `0002-20200115-20_40_07-Audio.wav`
 2. **Actimetry files**  (XX-Acti.txt): it has the  Accelerometer and Gyroscope informations. 
    - Actimetry file example: `0002-20200115-20_40_07-Acti.txt`
 3. **Meta data files** (XX-Data.txt):recording information (e.g., number buffers, times stamps...)
    - Meta data file example: `0002-20200115-20_40_07-Data.txt`