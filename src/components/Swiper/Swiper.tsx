import React, { useMemo, useRef, useState, useCallback } from "react";
import TinderCard from "react-tinder-card";
import { SwipeCard } from "../Card/SwipeCard";
// import { useLikedCards } from "../context/LikedCardsContext";
import { RxCross2, RxCheck } from "react-icons/rx";

export type CardDataPropType = {
  url: string;
  name: string;
};

export const Swiper = ({ data }: { data: CardDataPropType[] }) => {
  const [cards, setCards] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(data.length - 1);
  const [lastDirection, setLastDirection] = useState<string | null>(null);
  // const { addSwipedRightCard } = useLikedCards();
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(data.length)
        .fill(0)
        .map(() => React.createRef<any>()),
    [data.length]
  );

  const canGoBack = currentIndex < cards.length - 1;
  const canSwipe = currentIndex >= 0;

  const updateCurrentIndex = useCallback((newIndex: number) => {
    setCurrentIndex(newIndex);
    currentIndexRef.current = newIndex;
  }, []);

  const swiped = (direction: string, nameToDelete: string, index: number) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    if (direction === "right") {
      const swipedCard = cards[index];
      // addSwipedRightCard(swipedCard);
    }
    // Remove the card from the stack
    setCards((prevCards) =>
      prevCards.filter((card) => card.name !== nameToDelete)
    );
  };

  const outOfFrame = (name: string, idx: number) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
  };

  const swipe = async (dir: string) => {
    if (canSwipe && currentIndex < cards.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="relative w-[150px] h-[150px]">
        {cards.map((ele, index) => (
          <TinderCard
            ref={childRefs[index]}
            key={ele.name}
            onSwipe={(dir) => swiped(dir, ele.name, index)}
            onCardLeftScreen={() => outOfFrame(ele.name, index)}
          >
            <SwipeCard data={ele} />
          </TinderCard>
        ))}
      </div>

      <div className="">
        <button onClick={() => swipe("left")}>
          Swipe left! <RxCross2 />
        </button>
        {/* <button onClick={() => goBack()}>Undo swipe!</button> */}
        <button onClick={() => swipe("right")}>
          Swipe right!
          <RxCheck />
        </button>
      </div>
    </div>
  );
};
