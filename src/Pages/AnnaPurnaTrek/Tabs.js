import { ImageList, ImageListItem, Typography } from "@mui/material";
import { useState } from "react";
import "../../Assests/Tabs.scss";
import HeliPhotos from "./AnnapurnaTrekPhotos";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Details
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Pricings
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Photos
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h2">
            Details
          </Typography>
          <div className="details-section">
            <div className="top-section">
              <div className="header">
                <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h4">
                  overview
                </Typography>
              </div>
              <hr />
              <div className="content-area">
                <p>
                  The Annapurna Base Camp Trek is a popular trek in the
                  Annapurna region of Nepal. It is a challenging but rewarding
                  trek that offers stunning views of the Annapurna mountain
                  range, including the mighty Annapurna South, Hiunchuli, and
                  Gangapurna peaks. The trek takes you through lush forests,
                  past traditional villages, and up to the base camp at an
                  altitude of 4,130 meters.
                </p>
                <br />
                <p>
                  The trek starts in the city of Pokhara and takes around 7-10
                  days to complete, depending on your pace. The trail takes you
                  through the beautiful Modi Khola Valley and past traditional
                  Gurung villages. You'll get to see the local way of life and
                  learn about the rich cultural heritage of the region.
                </p>
                <br />
                <p>
                  As you make your way up the mountain, the scenery changes
                  dramatically. You'll find yourself in a landscape of rugged
                  peaks, cascading waterfalls, and glaciers. The highlight of
                  the trek is the Annapurna Base Camp, a stunning amphitheater
                  surrounded by towering peaks. It's the perfect place to sit
                  back, relax, and soak in the incredible views.
                </p>
                <br />
                <p>
                  The Annapurna Base Camp Trek is challenging, but the rewards
                  are well worth it. You'll need a good level of physical
                  fitness and some previous trekking experience. However, the
                  trek is well-trodden and well-supported, with plenty of
                  teahouses and lodges along the way.
                </p>
                <p>
                  If you're looking for an adventure in the heart of the
                  Himalayas, the Annapurna Base Camp Trek is the perfect choice.
                  With its stunning scenery, rich cultural heritage, and
                  challenging trek, it's sure to be an unforgettable experience.
                </p>
              </div>
            </div>
            <br />
            <div className="middle-section">
              <div className="header">
                <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h4">
                  Accomodation
                </Typography>
              </div>
              <hr />
              <div className="content-area">
                <p>
                  Annapurna Base Camp Trek offers various options for
                  accommodation along the trek. The options are as follows:
                  <br />
                  <br />
                  Teahouses: Teahouses are the most common form of accommodation
                  in the Annapurna region. They are basic lodges with simple
                  rooms and shared facilities. Teahouses serve as a source of
                  food and shelter for trekkers and provide a unique cultural
                  experience.
                  <br />
                  <br />
                  Mountain Lodges: Mountain lodges are a bit more comfortable
                  than teahouses and offer better facilities. They are usually
                  located at higher elevations and offer stunning views of the
                  surrounding mountains.
                  <br />
                  <br />
                  Camping: Camping is another option for those who prefer to be
                  more self-sufficient and independent. However, camping gear
                  and a camping permit are required.
                  <br />
                  <br />
                  Homestays: Homestays are a great way to experience the local
                  culture and hospitality. They offer a unique experience and
                  the opportunity to interact with the local people.
                  <br />
                  <br />
                  Regardless of the accommodation option chosen, trekkers can
                  expect basic facilities, including a bed, pillow, and blanket.
                  It is always a good idea to bring a sleeping bag and warm
                  clothing, as the temperature can drop significantly at night.
                </p>
              </div>
            </div>

            <div className="bottom-section">
              <div className="header">
                <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h4">
                  Route
                </Typography>
              </div>
              <hr />
              <div className="content-area">
                <p>
                  The Annapurna Base Camp Trek route is a popular trek in Nepal
                  that takes trekkers to the base camp of Mount Annapurna, one
                  of the tallest peaks in the world. The trek usually begins in
                  the town of Nayapul and goes through the following places:
                  Tikhedhunga Ghorepani Tadapani Chomrong Dovan Machhapuchhre
                  Base Camp Annapurna Base Camp The trek is about 12-14 days
                  long, depending on the speed of the trekker, and covers a
                  distance of approximately 130-140 km. The trek offers stunning
                  views of the Himalayas and the surrounding landscapes, and is
                  considered a moderate to difficult trek due to the altitude
                  and steep inclines.
                </p>

                <img src="./images/adventure/annapurnatrekroute.jpg" alt=""/>
              </div>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h2">
            Pricing
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h2">
            Photos
          </Typography>
          <ImageList sx={{ height: 450 }} variant="woven" cols={3} gap={8}>
            {HeliPhotos.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=161&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
