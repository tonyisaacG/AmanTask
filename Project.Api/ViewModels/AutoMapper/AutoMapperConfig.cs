using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModels.AutoMapper
{
    public static class AutoMapperConfig
    {
        private static readonly Lazy<IMapper> lazy = new Lazy<IMapper>(() =>
        {

            var config = new MapperConfiguration(config =>
            {
                config.ShouldMapProperty = e => e.GetMethod.IsPublic || e.GetMethod.IsAssembly; config.AddProfile<MapperProf>();
            });

            var mapper = config.CreateMapper();
            return mapper;
        });
        public static IMapper mapperModel => lazy.Value;
    }
}
