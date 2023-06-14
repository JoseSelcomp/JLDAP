import ldap from 'ldapjs';

export const client = ldap.createClient({
    url: 'ldap://192.168.10.22:389'
});
