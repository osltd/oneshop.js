'use strict'


/**
 * Define root class
 */
class Oneshop {

    constructor(credentials){
        // preset credentials if it has
        this.setCredentials(credentials);
    }

    loadModules(){
        // load modules
        this.mall     = new (require('./src/roles/mall'))(this.getBaseURL(), this.getCredentials());
        this.consumer = new (require('./src/roles/consumer'))(this.getBaseURL(), this.getCredentials());
        this.creator  = new (require('./src/roles/creator'))(this.getBaseURL(), this.getCredentials());
        this.merchant  = new (require('./src/roles/merchant'))(this.getBaseURL(), this.getCredentials());
    }

    /**
     * Set credentials for mall, consumer and merchant
     * @param mall - mall id, and mall token
     * @param consumer - consumer/creator session token
     * @param merchant - merchant session token
     */
    setCredentials(credentials = {}){
        // init credential
        this.credentials = this.credentials || {mall:{},consumer:{},merchant:{}};
        // process credential for each role
        ['mall','consumer','merchant'].forEach(role => {
            if(credentials[role] != undefined){
                this.credentials[role] = {
                    user : credentials[role].id || '',
                    pass : credentials[role].token || ''
                }
            }
        });
        // refresh modules
        this.loadModules();
    }

    getCredentials(){
        return this.credentials || {
            mall : {},
            consumer : {},
            merchant : {}
        };
    }


    // Using web store of Oneshop
    setWebMode(){
        this.baseURL = "/api";
        // refresh modules
        this.loadModules();
    }


    /**
     * Returns the Base URL of Oneshop API Endpoint
     */
    getBaseURL(){
        console.log(this.baseURL != undefined ?  this.baseURL : 'https://api.oneshop.cloud');
        return this.baseURL != undefined ?  this.baseURL : 'https://api.oneshop.cloud';
    }

}



module.exports = Oneshop;