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
     * 
     * Examples:
     *  os.consumer.project.update(1234,
     *  {test_branch:'dev',prod_branch:'prod',src_dirname:'test_repo',repo_url:'https://github.com/testproject/test.git'})
     * 
     */
    update(projectId, context){
        return this.request.post(`${this.baseURL}/projects/${projectId}`, context, this.credentials);
    }

    /**
     * Retrieve themes
     * @param {Object} query
     * @param {String} query[ids]
     * @param {String} query[page]
     * 
     * Examples :
     * 
     *  // get ALL project with page
     * 
     *  os.consumer.project.get({page:'1'})
     * 
     *  // get specified project with project ids and page 
     * 
     *  os.consumer.project.get({ids:'432,2644,489',page:'1'})
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/projects`, query || {}, this.credentials);
    }


}

module.exports = Project;