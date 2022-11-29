using AutoMapper;
using Database;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Repository.Unit;
using ViewModels.AutoMapper;
using ViewModels.VModels;
using Repository.Services;


namespace Project.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentsController : ControllerBase
    {
        private readonly DepartmentService _departmentService;
        
        public DepartmentsController(DepartmentService departmentService)
        {
            _departmentService = departmentService;
            
        }
        [HttpGet("GetAll")]   
        public IActionResult GetAll()
        {
            var departments = _departmentService.GetAll();
            return Ok(departments);
        }

        [HttpPost("Add")]
        public  IActionResult Add(DepartmentVM department)
        {
            if (ModelState.IsValid)
            {
                var res = _departmentService.Add(department);
                if (res == null)
                    return BadRequest();
                if (res == true)
                    return Ok();
                else
                    return BadRequest();
            }
            else { return BadRequest(); }
        }

        [HttpGet("GetOne/{id:int}")]
        public IActionResult GetOne(int id)
        {
            var res = _departmentService.GetOne(id);
            if (res == null)
                return NotFound();

            return Ok(res);
        }

        [HttpPost("Delete")]
        public IActionResult Delete(DepartmentVM entity)
        {
            var res = _departmentService.Delete(entity);
            if (res == null)
                return BadRequest();
            if (res == false)
                return NotFound();
            return Ok();
        }

        [HttpPost("Update")]
        public IActionResult Update(DepartmentVM entity)
        {
            var res = _departmentService.Update(entity);
            if (res == null)
                return BadRequest();
            if (res == false)
                return NotFound();
            return Ok();
        }

    }
}
