import React, { Fragment, useState } from "react";
import Colors from "~/constants/Colors";
import { SizedBox } from "~/constants/Common.style";
import { recommendations } from "~/data";
import { Body2, Body4, Caption1, Caption2 } from "~/constants/Typography";
import { SectionLayout } from "~/components/Layout";
import { chunkByLength } from "~/utils/common";
import * as Styled from "./Recommendation.style";

const Recommendation = () => {
  const [openRecommendations, setOpenRecommendations] = useState<string[]>([]);

  return (
    <SectionLayout title="Recommendation">
      {recommendations.map(recommendation => (
        <Fragment key={recommendation.title}>
          <Styled.ItemWrapper as="li">
            <a
              href={recommendation.link}
              title={`${recommendation.title} 깃허브 보러가기`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Styled.Title _color={Colors.gray5f} moFontSize={14}>
                {recommendation.title}
              </Styled.Title>
            </a>

            <SizedBox _height={10} />
            <Caption1
              as="p"
              moFontSize={12}
              whiteSpace="pre-wrap"
              lineHeight={16}
            >
              {openRecommendations.includes(recommendation.title) ? (
                recommendation.description
              ) : (
                <>
                  {chunkByLength(recommendation.description)[0]}...
                  <button
                    type="button"
                    onClick={() =>
                      setOpenRecommendations([
                        ...openRecommendations,
                        recommendation.title
                      ])
                    }
                    title="내용 더보기"
                  >
                    <Caption2 color={Colors.grayA8}>더보기</Caption2>
                  </button>
                </>
              )}
            </Caption1>
          </Styled.ItemWrapper>
          <Styled.HorizontalLine />
        </Fragment>
      ))}
    </SectionLayout>
  );
};

export default Recommendation;
