/**
 * Created by New User on 4/14/2016.
 */

// This is where you set up any configuration of third party apis - like twilio etc.

var config = {};

// call config.* and set as an object to hold parameters under
config.Twillio = {};
config.Twillio.account = "twillio account num";
config.Twillio.privateKey = "privKey";
config.Twillio.pubKey = "pubKey";

// call config.* and set as an object to hold parameters under
config.Mandril = {};
config.Mandril.account = "mandril account";

// call config.* and set as an object to hold parameters under
config.Azure = {};
config.Azure.storageAccount = "azure storage account";

module.exports = config;