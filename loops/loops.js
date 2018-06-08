// FOR LOOPS

//for loop to console log
//to print to DOM -- show one where only the last one works and also where the whole set gets concatted?
//for loop to build a string
//


// FOR ... IN LOOPS





// NESTED LOOPS - this gets complicated fast!


//COMPLEX OBJECT BELOW... just for practice maybe -- the object is in JSON format!

// GOT THIS OBJECT FROM:  https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJRXQ7c9FnZIgRgcixIrzIBAY&key=AIzaSyDBQnCK-6rLoNTLp6okHWItg_v5Lvs5Pho




const placeObject = {
  "html_attributions": [],
  "result": {
    "address_components": [
      {
        "long_name": "B",
        "short_name": "B",
        "types": [
          "subpremise"
        ]
      },
      {
        "long_name": "519",
        "short_name": "519",
        "types": [
          "street_number"
        ]
      },
      {
        "long_name": "Gallatin Avenue",
        "short_name": "Gallatin Ave",
        "types": [
          "route"
        ]
      },
      {
        "long_name": "East Nashville",
        "short_name": "East Nashville",
        "types": [
          "neighborhood",
          "political"
        ]
      },
      {
        "long_name": "Nashville",
        "short_name": "Nashville",
        "types": [
          "locality",
          "political"
        ]
      },
      {
        "long_name": "Davidson County",
        "short_name": "Davidson County",
        "types": [
          "administrative_area_level_2",
          "political"
        ]
      },
      {
        "long_name": "Tennessee",
        "short_name": "TN",
        "types": [
          "administrative_area_level_1",
          "political"
        ]
      },
      {
        "long_name": "United States",
        "short_name": "US",
        "types": [
          "country",
          "political"
        ]
      },
      {
        "long_name": "37206",
        "short_name": "37206",
        "types": [
          "postal_code"
        ]
      }
    ],
    "adr_address": "<span class=\"street-address\">519 Gallatin Ave B</span>, <span class=\"locality\">Nashville</span>, <span class=\"region\">TN</span> <span class=\"postal-code\">37206</span>, <span class=\"country-name\">USA</span>",
    "formatted_address": "519 Gallatin Ave B, Nashville, TN 37206, USA",
    "formatted_phone_number": "(615) 712-9766",
    "geometry": {
      "location": {
        "lat": 36.1823427,
        "lng": -86.748525
      },
      "viewport": {
        "northeast": {
          "lat": 36.1837460802915,
          "lng": -86.7473796697085
        },
        "southwest": {
          "lat": 36.1810481197085,
          "lng": -86.75007763029151
        }
      }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    "id": "b3408a82d57b295a3a58bf15e8b18b76caff3e6f",
    "international_phone_number": "+1 615-712-9766",
    "name": "Barista Parlor",
    "opening_hours": {
      "open_now": true,
      "periods": [
        {
          "close": {
            "day": 0,
            "time": "1800"
          },
          "open": {
            "day": 0,
            "time": "0700"
          }
        },
        {
          "close": {
            "day": 1,
            "time": "1800"
          },
          "open": {
            "day": 1,
            "time": "0600"
          }
        },
        {
          "close": {
            "day": 2,
            "time": "1800"
          },
          "open": {
            "day": 2,
            "time": "0600"
          }
        },
        {
          "close": {
            "day": 3,
            "time": "1800"
          },
          "open": {
            "day": 3,
            "time": "0600"
          }
        },
        {
          "close": {
            "day": 4,
            "time": "1800"
          },
          "open": {
            "day": 4,
            "time": "0600"
          }
        },
        {
          "close": {
            "day": 5,
            "time": "1800"
          },
          "open": {
            "day": 5,
            "time": "0600"
          }
        },
        {
          "close": {
            "day": 6,
            "time": "1800"
          },
          "open": {
            "day": 6,
            "time": "0700"
          }
        }
      ],
      "weekday_text": [
        "Monday: 6:00 AM – 6:00 PM",
        "Tuesday: 6:00 AM – 6:00 PM",
        "Wednesday: 6:00 AM – 6:00 PM",
        "Thursday: 6:00 AM – 6:00 PM",
        "Friday: 6:00 AM – 6:00 PM",
        "Saturday: 7:00 AM – 6:00 PM",
        "Sunday: 7:00 AM – 6:00 PM"
      ]
    },
    "photos": [
      {
        "height": 3024,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/114666313887465329077/photos\">Viney Varughese</a>"
        ],
        "photo_reference": "CmRaAAAAeU-S15hTWxFibvjyhLa5VcKQotahcVcTK7tUacx8MKK5UcTJM0TBHHlRMeu4hupaiVXhOIsLHR9xj3zRfhJSw5mhbG7_w1lsqBxSKPBlQtTZUcOolkQ21NNCA975rXeKEhAi4DLl5ZOh6VRcMQ7to332GhRbok3XMh3D_-NENgIUXA44wMYdhA",
        "width": 4032
      },
      {
        "height": 3024,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/104598213377486343742/photos\">Vicky Chan</a>"
        ],
        "photo_reference": "CmRaAAAAWVhvkCzLTd7-_7ds_JAM_WMJy8Pq54upy26CALXGHhQA3EHK03p3lEPDbkQCrcw_8wtarsyBGAKUg1aU8FgZytpfVGWUEgL5qEvg59eVhFw7ZurNe-M0vqWBhldAG93XEhAiDD5PJqT3GECkV4iXmu5eGhSzeJUT67gFV1At6p36lQDhc6w5TA",
        "width": 4032
      },
      {
        "height": 3024,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/107787885328082464592/photos\">Matthew McKeveny</a>"
        ],
        "photo_reference": "CmRaAAAAmgzupt21c1gC4kiPCQLo10P34bnmCLiZy1E19Hzlt7tthn6kUBxgCh7Li6pT6K4T9l14uFVOBAdJvrId-uwHHyISFpf-lFPp-6_YJa9tQHq4PVSK_RQ52A5t2LpDYUXEEhD-vD7CYGzBPYSDt5O3L_rvGhTbQRRdxS4C9fq3fzP-jcl6l5i91A",
        "width": 4032
      },
      {
        "height": 2400,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/105867661711821490343/photos\">버즈</a>"
        ],
        "photo_reference": "CmRaAAAAY5QZ4rSpMuAMFE669gQjtQeXf3MR5eTI-_MOxLmgkOs-HB2IG1yH1axrgDTWGOSTC3bfksaA7PyFtL-6tRTJ8U10ew_0JdCqSDw3ev-UVDYSE9BbSvGL9LDqo7ukiwNfEhAMaStuTioO1qYdSvFjYH_RGhRQbMPfSB2nwtZfjUVP7PxTFCxOlg",
        "width": 4240
      },
      {
        "height": 2988,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/117866153709899103638/photos\">Amanda Smith</a>"
        ],
        "photo_reference": "CmRaAAAATQhSjqmrQq6Rvkilu1XjyXrQUjQGsxZiW43yZzJ-x30JA1YhCT7fRoAPCOMqaTT90il8iWSoCLAyoqZh2AtiyM8r-92g_BZ9wxEmSWQVnm8u7LXe7RAWe8o_itsWTF90EhBo0jNIshj7cT0-t2KhXPfzGhSrPIlRsPzvl61ZQe1X8ME9yV94AQ",
        "width": 5312
      },
      {
        "height": 2988,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/111276356715985135872/photos\">Dawen Huang</a>"
        ],
        "photo_reference": "CmRZAAAA_9LSanptcGDDiRyTkbsWjScZPM_iX_VzhqzWmS1d2TB1Drgz9YfQEt_wbOzLQ9Vel_e80ehxPdqixjkc4kiQVt0t1T3cd84SXKwa0ZCFFMxqJB-KWmkepq7yBn6Kl8n7EhBZuT5pFt2ibVr0hzqX45f1GhT7rv2tY6HxA0wBCLwvKdu55H7nyw",
        "width": 5312
      },
      {
        "height": 582,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/112473909482543261638/photos\">Barista Parlor</a>"
        ],
        "photo_reference": "CmRaAAAAU2W-9LB-K6E0PJqayOQekMjM7POCYNgnWB34Fb6D2dW9qLe5fCK24WS_Or2DpUhipHjBvbdeHfUcNgnG8kk7kMHTgktkTDCJw-qhi8zTK5D_oxh2sWuTIGuPTz9DUpuSEhCB3M4v1Co_jfm6CTnOFpp0GhSPzp1GaXYN-YUYDLyjwnl0wj37bg",
        "width": 872
      },
      {
        "height": 1080,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/104269067018968615173/photos\">Angelo Telan</a>"
        ],
        "photo_reference": "CmRaAAAAv86t5qhyrI8_6KH3VKlljeoFwlNQzgM6UUMjqn0CUKBd3rb5OSW9cVIhDqbTOeNP00nExH1IE_0bNyRiMG21u1xLEVfLKYuVWsnFsfQuCzl2Gx8p0oQrROmGpprd26CxEhCv90pBgkyDC2sKhmI2DcmnGhTizseIfZTkfh2wl6F9E_KzleF6Hw",
        "width": 1920
      },
      {
        "height": 2988,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/106974305640303283032/photos\">Donna Tannenbaum</a>"
        ],
        "photo_reference": "CmRaAAAA1BT909A70odxUgzHYf5kwFrd-EOT35E7IRqcvuJXcJp2144-W92HyXPzlxdmkC9wtIoxhItzNzgzoI-R6Bm7MI9gjszOfZDiIq4fWjt6Bd-K8K1uE4ItLpWAlA9jQgq7EhDSOobNziqShn0Jtcn_HhPiGhQg7-TED1Cv1SuTr37EmxV9lDR4sA",
        "width": 5312
      },
      {
        "height": 3096,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/117913173396851033554/photos\">Steve Fye</a>"
        ],
        "photo_reference": "CmRaAAAAR3kU5VgCoBvpN6F0yJ8uLIfZyJPogBwhpP6qwUpXAkdQ-nynxHuoUmFZJYOsOOLCj5luS2mzUMFf4oDUrwEPUDdNFqGJUHQa7ulu7ceq7_YAS6G-zWlYI9TnoVQiXfvGEhADBsfD_XXiBbSc6w-kdVp7GhQGB5bk4Ifkbf59sblNF_MFmS-TIQ",
        "width": 4128
      }
    ],
    "place_id": "ChIJRXQ7c9FnZIgRgcixIrzIBAY",
    "price_level": 2,
    "rating": 4.3,
    "reference": "CmRRAAAAutylIbX4MwLoPiXRdcB-oHpfIoUlRixpDo1ALySl54TQ-YOqqJ-5ArR1_71tvRS-D35KL6EC26k2ficCxA98HubIAuwaeZXXRbiJQHxayHzYwsswBkiiF8kuX_2yH586EhBMBEj67fRvX2ALl9ZOgzxnGhQR-wVuXyrbVeMO2G4kmdIcTAEuLg",
    "reviews": [
      {
        "author_name": "David Mueller",
        "author_url": "https://www.google.com/maps/contrib/110846648480033924269/reviews",
        "language": "en",
        "profile_photo_url": "https://lh5.googleusercontent.com/--EEectJD6jA/AAAAAAAAAAI/AAAAAAAAArw/fIpCEHrxa3E/s128-c0x00000000-cc-rp-mo-ba2/photo.jpg",
        "rating": 5,
        "relative_time_description": "a week ago",
        "text": "Great place to get coffee. Rustic, modern, spacious, open concept, great coffee, great staff, clean, hipster, lots of seating, etc. there are also enough table that if you are having a private conversation you can get away from the rest of the coffee shop. I coffee is amazing too. Gourmet date I say it. Perfect date place, hangout place, study place, or business meeting place.",
        "time": 1527275013
      },
      {
        "author_name": "Ronald Winters",
        "author_url": "https://www.google.com/maps/contrib/114563926864804972650/reviews",
        "language": "en",
        "profile_photo_url": "https://lh4.googleusercontent.com/--QpDvZrcAzs/AAAAAAAAAAI/AAAAAAAAAAA/nbIkSxj4XMk/s128-c0x00000000-cc-rp-mo/photo.jpg",
        "rating": 2,
        "relative_time_description": "a month ago",
        "text": "Atmosphere was nice + space was impressive + staff was pleasant and helpful + coffee was good.  I did not have slow service experience other reviewers complained about.  What I will complain about is that the product is completely over-priced (unfortunate because I would have otherwise enjoyed going often).  The black coffee I purchased was probably almost twice the price of Starbucks.   If you are going to charge $4.70 for a black coffee, at least make it \"venti-sized\".  Since there is really little cost in the product itself,  giving the customer a small cup is really an expression of affectation and sticking it in the customer's eye.  Too bad.",
        "time": 1525855690
      },
      {
        "author_name": "What's Good",
        "author_url": "https://www.google.com/maps/contrib/117783817687209191504/reviews",
        "language": "en",
        "profile_photo_url": "https://lh6.googleusercontent.com/-MQIftkPnvvI/AAAAAAAAAAI/AAAAAAAAPSw/m8_876e8qCY/s128-c0x00000000-cc-rp-mo-ba4/photo.jpg",
        "rating": 5,
        "relative_time_description": "2 weeks ago",
        "text": "Went to the Barista Parlor for my first visit and I was not disappointed. The atmosphere was open and inviting, and their coffee milkshake was to die for. I also got a pastry which tasted fresh, even though it was late in the afternoon. Highly recommend.",
        "time": 1527022578
      },
      {
        "author_name": "Dan Hinst",
        "author_url": "https://www.google.com/maps/contrib/117163145401587054385/reviews",
        "language": "en",
        "profile_photo_url": "https://lh6.googleusercontent.com/-PFyWenr7SXU/AAAAAAAAAAI/AAAAAAAAAMg/NPKfXsT71Q0/s128-c0x00000000-cc-rp-mo/photo.jpg",
        "rating": 5,
        "relative_time_description": "a month ago",
        "text": "One of the many places to visit on your trip to Nashville. \n\nDon’t expect to be in a rush, that is what the drive-thru coffee shops are for. \n\nThe coffee is superb, top choices are perfectly individuality prepared. Pour overs, drip, lattes and cold brew are some of the brewing choices. \n\nThe breakfast options are purposely slim, they are all an excellent choice. My personal favorite is the Boss burrito, sausage biscuit comes in second.",
        "time": 1523721515
      },
      {
        "author_name": "Tobi Smith",
        "author_url": "https://www.google.com/maps/contrib/110616512554803993045/reviews",
        "language": "en",
        "profile_photo_url": "https://lh6.googleusercontent.com/-11vw2mXVJ4I/AAAAAAAAAAI/AAAAAAAAAFs/-nYeI2Lx0Pg/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg",
        "rating": 4,
        "relative_time_description": "a month ago",
        "text": "Have you been to a place where they are trying really hard, if so it will feel similar to barista parlor. The coffee was pretty good but I don't think it is the best in the city. The wait is very long but if you want to see a person who cares a lot (maybe too much) about coffee make coffee or like vintage BMW motorcycle I think it is work a visit",
        "time": 1525813750
      }
    ],
    "scope": "GOOGLE",
    "types": [
      "cafe",
      "store",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment"
    ],
    "url": "https://maps.google.com/?cid=433692174495893633",
    "utc_offset": -300,
    "vicinity": "519 Gallatin Avenue B, Nashville",
    "website": "http://www.baristaparlor.com/"
  },
  "status": "OK"
}
