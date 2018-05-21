using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestProject_DBOfCandidates.Models
{
    public class Candidate
    {
        public int Id { get; set; }
        public string FIO { get; set; }
        public int Age { get; set; }
        public string Position { get; set; }
        public int Salary { get; set; }
        public double NumberOfYearsOfExperience { get; set; }
        public string Date { get; set; }
        public byte[] TextFile { get; set; }

    }
}
