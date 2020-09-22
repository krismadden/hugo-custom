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


### Environment Installation

This section allows the user to set up the environment for the BabyLogger to work in the best way.


<!--more-->
#### Download the BabyLogger software
   - Download the BabyLogger's Software Package corresponding to your computer's operating system.
     - Click [Linux](/images/BabyCloud.zip) .
     - Click  [MacOs](/images/BabyCloud.zip) .
     - Click  [Windows](/images/BabyCloud.zip). 
   - Unzip the downloaded BabyLogger Softawre Package onto the computer . This step will create a **BabyLogger** folder.
   - Inside this folder, you will see three important folders:  
  
      - **Raw_Data** : it will contain the temporary encrypted  data.
      - **Decrypted_Data** : it will contain the decrypted data
      - **Scripts** :it contains all the needed scripts.
      - **Keys**: it will contain the keys to decrypt the data. You have to go [here](http://coml.lscp.ens.fr/babylogger/) and enter the **username** and **code** given on the email to download a **'Keys'** folder, with all the keys generated for your loggers. Please copy this folder into the **'BabyLogger'** folder.
  

#### Run the provided script to download all the required utilities
 - Open a terminal `Cntrl+Alt+t` and go to the **Scripts** folder and run the script `./softwares` or `sh softwares.sh`.
The utilities downloaded will be: **SFTP protcole**, **FileZilla (FTP Client)**, **Python3**, **HomeBrew**, **Sox**.

**<p style="color:red">NOTE</p>**
    Make sure that your computer has the required security protection (antivirus, hard drive encryption, password logins).
     As your computer will contain sensitive data collected with families, you are responsible for their data protection."



### SD Card

####  How to format the SD card?
With 64 GO SD card, Create two partitions with the first one containing 95% of the memory area and the second one 5%. The card should be formatted in the NTFS File System, and the partitions should be created in a fixed order (audio first, accelerometer second). The table below gives the names and sizes of the partitions that should be created according to your SD card size.



Partition| Name of partition| partition_size | partition_type| size_unity_allocation
--- |--- |--- | --- | ---
Partition 1 | BL_AUDIO|60.8GB |EXFAT| 64Ko 
Partition 2 | BL_MOTION |3.2GB |FAT32| 32Ko 

#### How to create a partition on a new SD card?
- **Tutorial**
  [here](xxx) is a tutorial.

- **OR Follow the steps below**
  -  Download the SD card image already partitioned [SDCard image](/images/img.zip).
  - **For MacOS/OS X and Linux**

    1.  Download and Install Etcher from https://etcher.io .
    2.  Open Etcher and click "Select Image" to choose the image file you already downloaded.
    <center>![Super wide](/images/sd1.png)</center>
    3. Choose SD Card as Drive.

    4. Click Flash.
    5. When the process is completed, eject and insert the SD card into the BabyLogger and power it up.
- **For Windows**

    1. Download the [Win32](https://sourceforge.net/projects/win32diskimager/) application for flashing the SD card
    2. Select your device (SD card) 
        
        <center>![Super wide](/images/sd2.png)</center>
    3. Locate the downloaded disk image
    
        <center>![Super wide](/images/sd3.png)</center>
    4. Click Write and wait for the wriing to be completed
   
        <center>![Super wide](/images/sd4.png)</center>
    5. When the process is completed, eject and insert the SD card into the BabyLogger and power it up.



### Decrypting the Data

All data recorded with the BabyLogger are encrypted for data protection. If the logger is lost, nobody except for the registered user will be able to decrypt the data. For that reason, do not share the downloaded software as well as the security key.
<!--more-->
#### Key management
- If you haven't already downloaded your keys during the 'Environment installation' process, you should go [here](http://coml.lscp.ens.fr/babylogger/). Enter the **username** and the **code** provided in the email to download **Key** folder with all the keys associated with your loggers. Then copy that 'Key' folder into the 'BabyLogger' folder.
  
**IMPORTANT: you should not attempt to modify or remove anything in the 'Key' folder. If you encounter any problem, re-download the keys and make sure that you are using the correct set of loggers (you can find the logger's ID in the accelerometer files).**

#### How to decrypt the BabyLogger data?
You must decrypt all data from one logger first and finish the process before decrypting other files. Otherwise, you will overwrite the raw files from the current logger because currently, all raw files share the same names regardless of the logger used) .

 1. Launch the decryption process by choosing one of these 2 options:
  - A) Double-click on the 'decrypt app' icon (if you encounter any problem, see the FAQ section).
  - B) Open a terminal `Ctrl+Alt+T`
       - Go to the path of the installed 'BabyLogger' folder.
       - Type the following command: `./decrypt`

 2. The decryptiion process will save the audio (wavs) and accelerometer data in the **Decrypt_Data** folder.
 3. You can then copy them for backup or move them for further processing. The files have now a unique name (associated with the logger ID and date).
 4. Delete all remaining files in the **Raw_data** folder.
 5. Delete all files from both partitions of the MicroSD card.

**NOTE: All data must be transferred from the MicroSD, processed and then deleted before the logger is in recording mode again.**


#### The decrypted files
The decrypted files can be found in the **Decrypt_Data** folder. You will find three types of files :

 1. **Audio files** (XX-Audio.wav): the audio files were recorded with a frequency of 16kz, 16bits and 4 channels. their duration is no longer than 30mins long.
    - Audio file example: `0002-20200115-20_40_07-Audio.wav`
 2. **Actimetry files**  (XX-Acti.txt):
    - Actimetry file example: `0002-20200115-20_40_07-Acti.txt`
 3. **Meta data files** (XX-Data.txt):
    - Meta data file example: `Actimetry file example: 0002-20200115-20_40_07-Data.txt`