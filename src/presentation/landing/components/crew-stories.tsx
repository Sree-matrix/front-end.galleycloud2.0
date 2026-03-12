"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { Stack, Container, Typography, Avatar } from "@mui/material";

interface ICrewStory {
  id: number;
  image: string;
  username: string;
  userAvatar: string;
}

const CREW_STORIES: ICrewStory[] = [
  {
    id: 1,
    image: "/assets/images/home/crew1.png",
    username: "@ivy_lane",
    userAvatar: "/assets/images/home/avat1.jpg",
  },
  {
    id: 2,
    image: "/assets/images/home/crew2.png",
    username: "@ivy_lane",
    userAvatar: "/assets/images/home/avat1.jpg",
  },
  {
    id: 3,
    image: "/assets/images/home/crew3.png",
    username: "@ivy_lane",
    userAvatar: "/assets/images/home/avat1.jpg",
  },
  {
    id: 4,
    image: "/assets/images/home/crew4.png",
    username: "@leo_parks",
    userAvatar: "/assets/images/home/avat1.jpg",
  },
  {
    id: 5,
    image: "/assets/images/home/crew5.png",
    username: "@ana_sky",
    userAvatar: "/assets/images/home/avat1.jpg",
  },
  {
    id: 6,
    image: "/assets/images/home/crew6.png",
    username: "@ben_hazel",
    userAvatar: "/assets/images/home/avat1.jpg",
  },
];

const CrewStoryCard = (props: ICrewStory) => {
  const { image, username, userAvatar } = props;
  return (
    <Stack
      sx={{
        minWidth: { xs: "17.5rem", sm: "18.75rem", md: "20rem" },
        height: { xs: "21.875rem", sm: "23.75rem", md: "25rem" },
        backgroundColor: "background.paper",
        borderRadius: "1.25rem",
        padding: "0.5rem",
        gap: "0.75rem",
        flexShrink: 0,
        cursor: "grab",
        userSelect: "none",
        "&:active": { cursor: "grabbing" },
      }}
    >
      <Stack
        sx={{
          position: "relative",
          width: "100%",
          flex: "0.5rem",
          borderRadius: "1rem",
          overflow: "hidden",
        }}
      >
        <Image src={image} alt={username} fill draggable={false} style={{ objectFit: "cover" }} />
      </Stack>

      <Stack sx={{ flexDirection: "row", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Avatar
          src={userAvatar}
          alt={username}
          sx={{
            width: "2rem",
            height: "2rem",
            border: "0.125rem solid #ffffff",
          }}
        />
        <Typography
          sx={{
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "text.primary",
          }}
        >
          {username}
        </Typography>
      </Stack>
    </Stack>
  );
};

export const CrewStoriesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDrag = (x: number) => {
    if (!scrollRef.current) return;
    setDragging(true);
    setStartX(x - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMove = (x: number) => {
    if (!dragging || !scrollRef.current) return;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Stack sx={{ backgroundColor: "grey.200", position: "relative" }}>
      <Stack
        sx={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(0deg)",
          width: "1764px",
          height: "156px",
          opacity: 1,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/assets/images/backgrounds/backlink.svg"
          alt="background"
          fill
          style={{ objectFit: "contain" }}
        />
      </Stack>


        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1, paddingTop:"3rem", }}>
          <Typography
            variant="h2"
            sx={{
              marginBottom: "3rem",
              color: "primary.dark",
            }}
          >
            Crew Stories
          </Typography>
        </Container>

        <Stack
          ref={scrollRef}
          direction="row"
          gap="1.5rem"
          onMouseDown={(e) => startDrag(e.pageX)}
          onMouseMove={(e) => onMove(e.pageX)}
          onMouseUp={() => setDragging(false)}
          onMouseLeave={() => setDragging(false)}
          onTouchStart={(e) => startDrag(e.touches[0].pageX)}
          onTouchMove={(e) => onMove(e.touches[0].pageX)}
          onTouchEnd={() => setDragging(false)}
          sx={{
            position: "relative",
            zIndex: 1,
            overflowX: "auto",
            paddingLeft: { xs: "1rem", sm: "2rem", md: "4rem" },
            paddingRight: { xs: "1rem", sm: "2rem", md: "4rem" },
            paddingBottom: "3rem",
            paddingTop:"1rem",
            scrollBehavior: dragging ? "auto" : "smooth",
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {CREW_STORIES.map((story) => (
            <CrewStoryCard key={story.id} {...story} />
          ))}
        </Stack>
      </Stack>
  );
};
