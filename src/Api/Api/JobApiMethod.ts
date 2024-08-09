import JobApiEndpoints from "../Endpoints/JobApiEndpoints";

import axios, { AxiosResponse, AxiosError } from "axios";







  // @dec     FetchJobs
// method    Get

export const FetchJobs = async ( ) => {
    try {
        console.log("worked gech job")
        const headers = {
            "x-rapidapi-key": "85552fe235msha3ff25c4e314edcp1e2b6djsn728ddea844a5",
            "x-rapidapi-host": "linkedin-data-api.p.rapidapi.com",
            // Add more headers here if needed
        };

        // Make the request with the headers
        const res = await axios.get(JobApiEndpoints.getJobData, { headers });

        console.log(' response ',res)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const FetchJobs2 = async ( ) => {
    try {
      const res = await  fetch("https://in.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/engineering-jobs-kanayannur?trk=homepage-jobseeker_suggested-search&original_referer=https%3A%2F%2Fin.linkedin.com%2Fjobs&start=25", {
            "headers": {
              "accept": "*/*",
              "accept-language": "en-US,en;q=0.9",
              "csrf-token": "ajax:8931606394078455253",
              "priority": "u=1, i",
              "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "cookie": "lang=v=2&lang=en-us; bcookie=\"v=2&82a6f681-60e3-4d42-8a7d-2fa224f1aa98\"; lidc=\"b=VGST02:s=V:r=V:a=V:p=V:g=3305:u=1:x=1:i=1723133524:t=1723219924:v=2:sig=AQG2KO0G_zwMHhxmRAULEkSqrkdij6Qp\"; _gcl_au=1.1.1293001248.1723133526; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19944%7CMCMID%7C03656192615546677272448527632510070341%7CMCAAMLH-1723738325%7C12%7CMCAAMB-1723738325%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1723140725s%7CNONE%7CvVersion%7C5.1.1; aam_uuid=04227401822777679402393036291652410766; JSESSIONID=ajax:8931606394078455253; bscookie=\"v=1&20240808161302ef72be24-0d3c-43cf-8cdb-8e20590f67ddAQGEF3unarr4Jp1fI_pkqkDq_yHDeVm5\"; aam_uuid=04227401822777679402393036291652410766; _uetsid=164dcf3055a111ef9b987dfa89676712; _uetvid=164e006055a111ef9e4167bf0b1c7026; ccookie=0001AQEDfAowShSJ5QAAAZEyygi4q+fO31xpcrrdcy6l8t75OpSsQekr6l0+lQG12j+xII63bvRBwKRNoBuoGRgZUKLotw5Y08aBVKf7lKszH7CXanz4wbpktkza8BOeO3yZ+Ufi4g+T3C+MbTcCiWccpAXTnXKgIeEMs5MOTeZ+SpawC6M6+A9/SA==",
              "Referer": "https://in.linkedin.com/jobs/engineering-jobs-kanayannur?trk=homepage-jobseeker_suggested-search&original_referer=https%3A%2F%2Fin.linkedin.com%2Fjobs&position=1&pageNum=0",
              "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
          });
          
        console.log(' response ',res)
        // return res.data
    } catch (error) {
        console.log(error)
    }
}

