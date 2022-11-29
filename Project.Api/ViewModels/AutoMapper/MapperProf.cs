using AutoMapper;
using Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ViewModels.VModels;

namespace ViewModels.AutoMapper
{
    public class MapperProf:Profile
    {
        public MapperProf()
        {
            CreateMap<Department, DepartmentVM>().ReverseMap();
            CreateMap<Employee, EmployeeVM>().ReverseMap();
        }

    }
}
