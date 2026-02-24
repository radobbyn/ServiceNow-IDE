import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'b9e4ad82b26c440c953cdd9e122969b9'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '239bd4335f4641eca4afe27797fc394e'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: 'f35c7cdc1cc14c818a20c1f00c272baf'
                    }
                    'lodash.snakecase@4.1.1/index.js': {
                        table: 'sys_module'
                        id: '6f1c397e54814498bffb49abcd98a730'
                    }
                    'lodash.snakecase@4.1.1/package.json': {
                        table: 'sys_module'
                        id: '5cdfabd48b1c45db813fc9441e04c822'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'b644664adf414566b7e98b48c9359ca9'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '82d9dfbe21ce4c76b758d62d73210a7d'
                    }
                }
            }
        }
    }
}
