---
title: "What is the BabyLogger"
weight: 100
description: >
  >
  Use hugo shortcodes to quickly compose site pages.
---

## About the BabyLogger


### Overview of the BabyLogger

The BabyLogger is a device used by researchers to record the child’s interactions in a secure way and to extract the audio and actimetric information.



#### Components
The following pictures shows the main components of the baby logger:

![Super wide](/images/2.png)
![Super wide](/images/33.png)

<center> Right: BabyLogger with the cover removed.</center>
#### Using the Logger
How to position the logger and insert it in the pocket. Be careful to put the green light on the front and the top of the cover upwards.

![Super wide](/images/4.png)![Super wide](/images/5.png)

#### Inserting and removing the SD card in the BabyLogger
 Remove the cover and insert or remove the SD card from the top of the Logger. Caution: it is a tiny card and it may spring out. Be careful not to lose it.

<center> ![Super wide](/images/6.png) </center>

#### BabyLogger microphones and channels
<center> ![Super wide](/images/7.png) </center>

<center> Position of the 4 microphones and channels </center>

#### Technical specifications

- <i><b>Audio recorder</b></i> : 4 channels, 16kHz sampling rate, 16bits.
- <i><b>Actimeter</b></i> : xzy gyroscope, and xyz accelerometer, 100Hz sampling rate.
- <i><b>Dimensions</b></i> : **L**: 7,5cms, **H**: 4,7cms (5cms with cover), **D**: 1,5cms (1,9cms with cover).
- <i><b>Weight</b></i> : 200g.
- <i>Millisecond time stamping</i>.
- <i><b>Capacity</b></i> : 62 hours / 124 hours (for 32GB / 63GB SD card storage).
- <i><b>Autonomy</b></i> : 24h.
- <i><b>Charging time</b></i> : 2-3 hours (on a 5v 1-2A USB charger).


### How to use the BabyLogger

The BabyLogger is very simple to use. It has a single button used to *power on* the logger (short press) and to turn it off (long press). The different states of the BabyLogger are indicated via two LEDs:  <span style="color:green">**GREEN** </span> and  <span style="color:red">**RED** </span> (for LED states see Step 1). 


The device consists of two parts: a main body and a cover. Removing the cover allows for access to the SD card, and power plug (micro USB).

To use the BabyLogger for recording, ensure the cover is on before inserting the logger into the chest pocket of the participant with the microphone on the top of the logger facing up and the other three microphones facing out as shown in figure 2.

The BabyLogger has a 24 hour continuous recording capacity (for both battery and data). After each recording session, you’ll have to transfer the data to your computer through the SD card, delete all files on the SD card, and recharge your BabyLogger.


Different steps to explain how to use the BabyLogger.



#### Step 1. Starting the Babylogger

- Press briefly on the power button.
  
* **Internal checks:**
  - Immediately after powering on the device will go through a series of internal checks (battery, SD card) that will take a few seconds. 
* **The device is ready for use if:**
  - the <span style="color:green">**GREEN LED** </span> is lit and if the <span style="color:red">**RED LED** </span> blinks continuously: you have less than 15% of the battery (less than 4h of recording).
  - the <span style="color:green">**GREEN LED** </span>  blinks once, then remains lit: less than 50% of the battery.
  - the <span style="color:green">**GREEN LED** </span>  blinks twice, then remains lit: less than 75% of the battery
  - the <span style="color:green">**GREEN LED** </span>  blinks 3x, hen remains lit: more than 75% of the battery.


* **The device is not ready for use if:**
  - After powering on, neither of the  **2 LEDs** are **ON**:  the battery is critically low and needs to be charged immediately.
  - During recording, the <span style="color:red">**RED LED** </span>  blinks 3 times and stops: the battery is very low. You have to charge it.
  - After powering on, the <span style="color:green">**GREEN LED** </span>  is **ON** and turns **OFF** after a few seconds: there is a problem with the SD card (unplugged, corrupted or full). Check whether the SD card is present. If present, transfer the files to a computer and remove the files (see Step 4). If the problem is not solved, you will have to reformat the two partitions of the card. If the problem persists, try to change the SD card [see this section](/getting-started/sd_card/) to replace the SD card).

#### Step 2. Recording

With the <span style="color:green">**GREEN LED** </span> LED continuously lit, the BabyLogger is now in the recording phase  if the ( <span style="color:red">**RED LED** </span>  is blinking, it shows that the battery is low). 

Insert the BabyLogger in the chest pocket with the top of the cover facing up, and the three microphones in the front facing out.


#### Step 3. Turning off the logger
Turn off the BabyLogger by pressing the power button (long press, 3 seconds). **All LEDs** should be **off**.


#### Step 4. Transferring recordings
- 1) Remove the cover and push the SD card out. Be careful: the SD card may shoot out of the slot and can be easily lost -- it is tiny.
- 2) Put the SD card in a MicroSD adaptor and plug it into the computer.
- 3) Boot your computer(for software installation see [here](/getting-started/decrypt/)), drag and drop the files from both partitions on the MicroSD (BL_MOTION and BL_AUDIO) into the Raw_Data folder on your computer.


##### <span style="color:RED">WARNING</span>
Be careful, if using more than one logger, transfer and decrypt the first logger’s raw files before transferring the second logger’s raw files. All loggers use the same file name pattern, therefore you will overwrite the first logger’s raw files if they are not decrypted before transferring files from the second logger.


#### Step 5. Decrypting the recordings

To decrypt the files, follow the [decrypt process](/getting-started/decrypt/).

#### Step 6. Charging the logger
Remove the logger’s cover. Plug the micro USB end of the charging cord into the logger’s Micro USB port. Plug the USB end into any computer USB port or phone charger with a USB port. To avoid damaging the battery, make sure the voltage of the charger is no higher than 5V. For a normal charging time, ensure the current capacity is between 1A and 2A.
<center> 
![USB_picture](/images/usb.png)
</center>

**NOTE:**
You can use a USB/ Micro-USB cable to charge the Logger with any standard charger (or computer).



The <span style="color:green">**GREEN** </span> and  <span style="color:red">**RED** </span> **LEDs** blink steadily while the logger is charging. Once the device is fully charged, both LEDs will turn off. The device will turn itself off automatically. The logger takes 2-3 hours to fully charge. 



##### <span style="color:RED">WARNING</span>
- While the logger is charging, it is not possible to record.
- Once the logger has been fully charged, the device must be used at least once before it will be able to charge again. This is for power saving purposes designed to prevent the logger from draining portable external batteries.
- To avoid losing data, we strongly recommend following step 1 to step 5 through fully, without skipping any steps. Most importantly, remember to fully transfer the data and recharge the logger after each recording session.


