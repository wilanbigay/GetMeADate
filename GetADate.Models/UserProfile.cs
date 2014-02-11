using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GetADate.Models
{
    public class UserProfile
    {
        public int ProfilId;
        public enumUserSource Source;
        public string SocialMediaId;   //fbid, twitterid

        //personal info
        public string Nickname;
        public string Email;
        public string FirstName;
        public string LastName;
        public string Address;
        public string RegisterDate;
        public DateTime BirthDate;
        public string Bio;






    }

    public enum enumUserSource
    {
        Facebook = 1,
        Twitter = 2,
        GooglePlus = 3
    }



}
