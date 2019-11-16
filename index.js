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


    /**
     * Set Base URL of the SDK
     * @param {*} baseURL 
     */
    setShopDomain(domain){
        if(!/^(http(s)?\:\/\/)?[a-z1-9\.]+$/i.test(domain)){
            throw 'Please enter the domain only, path and symbols is forbidden, except "."'
        }
        this.baseURL = /^http(s)?/i.test(domain) ? `${domain}/api` : `https://${domain}/api`;
        // refresh modules
        this.loadModules();
    }


    /**
     * Returns the Base URL of Oneshop API Endpoint
     */
    getBaseURL(){
        return this.baseURL || 'https://api.oneshop.cloud';
    }

}



module.exports = Oneshop;