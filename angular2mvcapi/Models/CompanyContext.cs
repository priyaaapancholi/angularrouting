using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace angular2mvcapi.Models
{
    public class CompanyContext:DbContext
    {
        DbSet<Company> company { get; set; }
    }
}