Ext.define('todoTask.view.Loginform', {
    extend : 'Ext.Panel',
    xtype : 'loginform',
    requires : [
        'Ext.field.Password',
        'Ext.field.Email',
        // 'Ext.Message.alert'
    ],
    config : {
        layout: {
            type: 'vbox',
            align: 'middle'
        },
        fullscreen : false,
        centered: true,
        width: '100%',
        height: '100%',
        scrollable: null,
        border: 2,
        style: 'border-color: blue; border-style: solid;',
        items: [
            {
                xtype: 'emailfield',
                name: 'email',
                label: 'Email'

            },
            {
                xtype: 'passwordfield',
                name: 'password',
                label: 'Password'
            },
            {
                xtype : 'button',
                name : 'login',
                html : 'Login',
                height: '10%',
                width : '10%',
                listeners : {
                    tap: function (me) {
                        alert('You Clicked on Submit button Please contact Dariya for more information');
                    }
                }
            }
        ]
    
    }
});