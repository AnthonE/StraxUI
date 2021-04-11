# STRAX Wallet

This is the repository of the Stratis wallet. This wallet using Electron and Angular at the front-end and .NET Core with C# in the back-end.  
STRAX Wallet is a full node staking wallet for the Stratis network.
To download and install the latest release, please have a look [here](https://github.com/stratisproject/StraxUI/releases).

# Building and running the StratisBitcoinFullNode daemon

The StratisBitcoinFullNode daemon is the backend REST service, hosting a Stratis node upon which Stratis Core depends.  
The StratisBitcoinFullNode daemon is hosted in another repository. All information on building and running the daemon can be found [here](https://github.com/stratisproject/StratisBitcoinFullNode/blob/master/Documentation/getting-started.md).

# Building and running the user interface

## Install prerequisites

Download and install the latest version of Git [here](https://git-scm.com/).  
Download and install the latest Long Term Support (LTS) version of NodeJS [here](https://nodejs.org/). 

## Getting Started

Clone the repository locally:

``` bash
git clone https://www.github.com/stratisproject/StratisCore
```

Navigate to the StratisCore.UI folder in a terminal:
``` bash
cd ./StratisCore/StratisCore.UI
```

## Install dependencies with npm:

From within the StratisCore.UI directory run:

``` bash
npm install
```

## Run the UI in development mode

#### Terminal Window 1
[Run the daemon](https://github.com/stratisproject/StratisBitcoinFullNode/blob/master/Documentation/getting-started.md)  

#### Terminal Window 2
Each of our supported networks have their own way of starting the user interface.  
Use `npm run mainnet` to start the UI in StratisMain mode.  
Use `npm run testnet` to start the UI in StratisTest mode.   
Use `npm run sidechain` to start the UI in CirrusMain mode.   
Use `npm run sidechain:testnet` to start the UI in CirrusTest mode.  
All these commands will compile the Angular code and spawn the Electron process for the desired network.

## Build the UI for production

|Command|Description|
|--|--|
|`npm run build:prod`| Compiles the application for production. Output files can be found in the dist folder |
|`npm run package:linux`| Builds the Stratis Core application for linux systems |
|`npm run package:linuxarm`| Builds the Stratis Core application for linux-arm system (i.e., Raspberry Pi) |
|`npm run package:windows`| Builds the Stratis Core application for Windows systems |
|`npm run package:mac`| Builds the Stratis Core application for MacOS systems |
|`npm run package:sidechain:linux`| Builds the Cirrus Core application for linux systems |
|`npm run package:sidechain:linuxarm`| Builds the Cirrus Core application for linux-arm systems (i.e., Raspberry Pi) |
|`npm run package:sidechain:windows`| Builds the Cirrus Core application for windows systems |
|`npm run package:sidechain:mac`|  Builds the Cirrus Core application for MacOS systems |

When starting the application it will automatically run the network in Mainnet mode. If you want to start the application for testnet, please add the `-testnet` argument when starting the application.

**The application is optimised. Only the files of /dist folder are included in the executable. Distributable packages can be found in the StratisCore.UI/app-builds/ folder**

## CI Build
-----------

Every time someone pushes to the master branch or create a pull request on it, a build is triggered and a new unstable application release is created.

If you want the :sparkles: latest :sparkles: (unstable :bomb:) version of the Core application, you can get it here: 

https://github.com/stratisproject/StratisCore/releases/tag/Continuous-Delivery

