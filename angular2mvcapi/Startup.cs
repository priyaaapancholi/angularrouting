using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(angular2mvcapi.Startup))]
namespace angular2mvcapi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
