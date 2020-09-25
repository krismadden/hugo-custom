---
title: "Automatic Data Processing"
weight: 300
---

## Automatic Data Processing

### Send data to the server

This section is to explain the steps to send file's data to the server, in order to treat them, you can follow this documentation step by step or you can find all of this on this [tutorial](https://www.youtube.com/watch?v=seTY6lqetRI&t=97s).
<!--more-->
#### Transfer Files to the Cloud
To transfer files data to the server we use the FileZilla software as a solution.
  
##### Using FileZilla software (SFTP Client)
FileZilla may be used for secure file transfer using SFTP or FTPS between clients and server.

  - **Installation**
  
      You can download filezilla software  [here](https://filezilla-project.org/) according to your operating system.

  - **Set up a Server Connection**

  1. Start FileZilla. Click the FileZilla icon .
  2. From the File menu, select Site Manager.
  3. Click New Site
  4. Do the following:
     - In the Host box, enter the address of the server you're connecting to `129.199.81.135`.
     - Click the arrow in the Server Type box, and then:
     - For FTPS transfers, select FTP over SSL (explicit encryption).
     - In the Logontype box, click Normal.
     - In the User box, enter the username you were assigned for this server.
     - Click the Don't save password box.
     - you already received on the email.
1. Click Save and Exit.
The next time you open FileZilla, you can connect directly to this server using the options you chose. For instructions, see Transfer Files Using FileZilla below.

- **Transfer Files Using FileZilla**

1. Start FileZilla. Click the FileZilla icon on your desktop or in your computer. 
2. Click the arrow next to the Open Site Manager button, and then select the server you set up in the previous procedure.
3. In Address box, enter the server Ip address which is : `129.199.81.135`.On the Username and Password box, enter your renter the informations given on the email, and then click OK.
4. FileZilla opens. Your computer (Local Site) is on the left and the server (Remote Site) is on the right. Navigate to different locations on either system. 
5. Create on your local computer a folder name `Data_to_process` ,put there all the data files you want to treat.
6. if you use the Babylogger, you can send the decrypted files on the `Decrypte_Data` folder or send the encrypted files on the `Raw_Data` folder.
7. Drag and drop  this folder left part(Server).
8. For more information, click Help in the FileZilla.


<!-- this is causing issues too -->
### Data processing
Here are the different algorithms used to treat the data. 
<!--more-->

1) **Pyannote**
An  open-source  toolkit written in Python for speaker diarization. Pyannote allows the following tasks:

  - *Voice Activity Detection (VAD)* is the task of detecting speech regionsin a given audio stream or recording. The ouput for this in the rttm file is SPEECH. To this label, is associated the onset and the duration.
  - *Speaker change detection* is the task of detecting speaker change points in a given audio stream or recording. Currently, the labels we output are:
  - **KCHI** (key child), **OCH** (other children),**MAL** (male adult.s), **FEM** (female adult.s).
  
Note that for the last 3 categories, speakers of the same type are aggregated. For example, we don't make the distinction if there are 3 distinct female speakers. They are all labelled under FEM.

  - Here's a sample output of the rttm file using the Pyannote algorithm:
  - SPEAKER FEM_MA_speech_test_3_16000Hz_16bit_mono 1 1.011 4.506 <NA> <NA> SPEECH <NA> <NA>
  - SPEAKER FEM_MA_speech_test_3_16000Hz_16bit_mono 1 1.014 4.475 <NA> <NA> MAL <NA> <NA>


1) **ALICE**
  
An open-source and language-independent tool for automatic measurement of phoneme, syllable, and word counts.
ALICE allows the following measurements:

  - *Count of total phones/phonemes* per file,
  - *Count of total syllables* per file,
  - *Count of total words* per file.

  - Here's a sample output using the ALICE algorithm:
  - FileID phonemes syllables words.
  - FEM_speech_test_2_16000Hz_16bit_mono 227 111 72.
  - MA_speech_test_1_16000Hz_16bit_mono 239 118 79.


**References:**

- Bredin, H., Yin, R., Coria, J. M., Gelly, G., Korshunov, P., Lavechin, M., Fustes, D., Titeux, H., Bouaziz, W. and Gill, M.-P. (2020). pyannote.audio: neural building blocks for speaker diarization. In International Conference on Acoustics, Speech, and Signal Processing (ICASSP) 2020.
- Lavechin, M., Bousbib, R., Bredin, H., Dupoux, E., & Cristia, A. (submitted). An open-source voice type classifier for child-centered daylong recordings. Submitted to Interspeech-2020, October 25–29, Shanghai, China. Online arXiv pre-print: https://arxiv.org/pdf/2005.12656.pdf
- Räsänen O, Seshadri S, Lavechin M, Cristia A, Casillas M. ALICE: An open-source tool for automatic measurement of phoneme, syllable, and word counts from child-centered daylong recordings. Behav Res Methods. 2020 Sep 1. doi: 10.3758/s13428-020-01460-x. Epub ahead of print. PMID: 32875399.
<!-- this is causing issues too -->

### Result reception

When all the data are treat, you will receive an email notification in order to get the result data.
follow this video for more explications [tutorial](https://youtu.be/cO3RGgTE2hA).

**Data reception steps**

  - Connect to FileZilla software, using the same method on the send section with the same login information.
  - On the right section (Remote server) you can find a folder with the decrypted data if you already  sent an encrypted data of the BabyLogger.you can also find your wave files if you have sent audio files recorded by other devices and the result of the treatment algorithms are on a folder name  `output_result` .
