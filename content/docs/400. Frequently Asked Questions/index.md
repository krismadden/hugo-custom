---
title: "FAQs"
weight: 410
---

## Frequently Asked Questions
<!--more-->

- [Problems in launching the decrypt software.](#Problems in launching the decrypt software.) 
- [Problems in decrypting the files.](#Problems in decrypting the files.)
- [Warnings during file decryption process.](#Warnings during file decryption process.)
- [Data volume and synchronization software](#Data volume and synchronization software)
- [Problems with the SD card](#Problems with the SD card)


### Problems in launching the decrypt software.
If you use **MacOS**, the first time when you double-click on BabyLogger, a window like the following may appear:

<center>![Super wide](/images/8.png)</center>

To resolve this problem, you have 2 options:

1) Authorize this application in the Security & Privacy tab of System Preferences and try again.

2) Use the terminal:
   
   - Open a terminal: Ctrl+cmd+T (Linux), by searching for terminal (MacOS) or type cmd (Windows).
   - Go to the path where to find the installed MacOS_babylogger_decrypt folder for example.
   - Type the following command on a terminal: ./babylogger_OSname (for Linux and MacOS) and babylogger_windows.exe (for Windows).

If you use **Windows**, if you have a warning (see the picture below) when you double click the Windows_babylogger_decrypt app, click on Run anyway.
<center>![Super wide](/images/wind.png)</center>

### Problems in decrypting the files.
The decryption software is tuned to the particular loggers that you have ordered. This is for data protection. If a logger is lost, nobody except the registered user will be able to decrypt the data. It also means that you should not distribute the software that you have downloaded. It contains a set of keys dedicated for your specific loggers. The keys are in the directory keys/ and you should not change or remove anything in this directory.

If you encounter a problem, re-download the software and make sure that you are using the correct set of loggers (the logger IDs appear in the audio, meta data and accelerometer files).
### Problem with decryption process on Windows
On Windows , if you have a warning (see the picture below) when you double click the Windows_babylogger_decrypt app, click on *Run anyway*.
<center>![Super wide](/images/wind.png)</center>

### Warnings during file decryption process.
The decryption process runs a check on data integrity. In case of warnings, it means that part of the audio is missing, which could be due to problems with the hardware (the Logger or the SD Card).

### Data volume and synchronization software. 
**WARNING**

- The logger files are large and will take up lots of hard drive space (around 60% more than the size of the SD Card in use). For example, for a 64GB storage on the SD card, 100GB will be required on the hard drive. f you are using an automatic synchronization on the cloud (icloud, dropbox, etc), be careful to exclude the Logger directories from automatic backup! This may slow down everything and saturate your storage allocation.

- If you use a MacOS and you synchronyze the MacOS storage with the icloud, make sure that when you copy the files onto the 'Raw_Data' folder, these stay on your own device (local storage) and are not synced with the icloud.
In the following example, it means that the file is in the icloud and not on the local device.

- If that happens, delete the files and re-copy them. They should be this time on your local device, and make sure that no cloud logo exist like in the previous picture.

### Problems with the SD card
If you use Linux and while copying the files from the SD card, you encounter issues with the SD Card format, type the following commands:

    - `sudo add-apt-repository universe`
    - `sudo apt update`
    - `sudo apt install exfat-fuse exfat-utils`
