const Role = require('../fundamental');

class Project extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * @param {Integer} projectId
     * @param {Object} context
     * @param {String} context[repo_url]
     * @param {String} context[test_branch]
     * @param {String} context[prod_branch]
     * @param {String} context[src_dirname]
     */
    update(projectId, context){
        return this.request.post(`${this.baseURL}/projects/${projectId}`, context, this.credentials);
    }

    /**
     * Retrieve themes
     * @param {Object} query
     * @param {String} query[ids]
     * @param {String} query[page]
     */
    get(query){
        return this.request.get(`${this.baseURL}/projects`, query || {}, this.credentials);
    }


}

module.exports = Project;