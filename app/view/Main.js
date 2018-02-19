Ext.define('todoTask.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Home',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },

                html: [
                    "<h1>Welcome to Sencha touch todo task activity </h1><br>",
                    "<a  href=\"http://docs.sencha.com/touch/2.4/2.4.2-apidocs/#!/api/Ext.form.Panel\">Click here for sencha docs</a>",
                    "<br> <a href =<iframe width=\"100%\" height=\"100%\" src=\"app/resources/Softwares.pdf\" ></iframe>Click here for Softwares list</a>"
                ].join("")
            },
            {
                title : 'Login',
                iconCls : 'user',
                styleHtmlContent : true,
                scrollable: false,
                items : {
                    xtype: 'loginform'
                }
            }
        ]
    }
});
