'use client';
import React from "react";
import { BasicSection, Carrousel, DisplayBtn, DisplayGallery, DisplayForm, DisplayFramedImage, HeadingSummaryAnimated, HeadingSummaryBasic, ImageDivider, LineDivider, Section, SectionLocation, SectionWithFramedText, SideSummary, FramedBetweenImage, ImageBetweenFramed } from "@/types/api";

import RenderBasicSection from "@/components/Section/renderBasicSection";
import RenderCarrousel from "@/components/Section/renderCarrousel";
import RenderDisplayBtn from "@/components/Section/renderDisplayBtn";
import RenderDisplayForm from "@/components/Section/renderDisplayForm";
import RenderDisplayFramedImage from "@/components/Section/renderDisplayFramedImage";
import RenderDisplayGallery from "@/components/Section/renderDisplayGallery";
import RenderFramedBetweenImage from "@/components/Section/renderFramedBetweenImage";
import RenderSummaryAnimated from "@/components/Heading/renderSummaryAnimated";
import RenderSummaryBasic from "@/components/Heading/renderSummaryBasic";
import RenderImageBetweenFramed from "@/components/Section/renderImageBetweenFramed";
import RenderSectionLocation from "@/components/Section/renderSectionLocation";
import RenderSectionWithFramedText from "@/components/Section/renderSectionWithFramedText";
import RenderSideSummary from "@/components/Section/renderSideSummary";
import RenderImageDivider from "@/components/Divider/renderImageDivider";
import RenderLineDivider from "@/components/Divider/renderLineDivider";

interface SectionRendererProps {
  section: Section;
}

const SectionRenderer: React.FC<SectionRendererProps> = ({ section }) => {
    React.useEffect(() => {
        (CSS as any).paintWorklet.addModule("/js/squircle.min.js");
      }, []);

      //console.log("Paint Worklet Support:", "paintWorklet" in CSS);
    
    switch (section.__typename) {
    case "ComponentSectionBasicSection":
        return <RenderBasicSection {... (section as BasicSection)} />;
    case "ComponentSectionCarrousel":
        return <RenderCarrousel {...(section as Carrousel)} />;
    case "ComponentSectionDisplayBtn":
        return <RenderDisplayBtn {...(section as DisplayBtn)} />;
    case "ComponentSectionDisplayForm":
        return <RenderDisplayForm {...(section as DisplayForm)} />;
    case "ComponentSectionDisplayFramedImage":
        return <RenderDisplayFramedImage  {...(section as DisplayFramedImage)} />;
    case "ComponentSectionDisplayGallery":
        return <RenderDisplayGallery {...(section as DisplayGallery)} />;
    case "ComponentSectionFramedBetweenImage":
        return <RenderFramedBetweenImage {...(section as FramedBetweenImage)} />;
    case "ComponentHeadingSummaryAnimated":
        return <RenderSummaryAnimated {...(section as HeadingSummaryAnimated)} />;
    case "ComponentHeadingSummaryBasic":
        return <RenderSummaryBasic {...(section as HeadingSummaryBasic)} />;
    case "ComponentSectionImageBetweenFramed":
        return <RenderImageBetweenFramed {...(section as ImageBetweenFramed)} />;
    case "ComponentSectionSectionLocation":
        return <RenderSectionLocation {...(section as SectionLocation)} />;
    case "ComponentSectionSectionWithFramedText":
        return <RenderSectionWithFramedText {...(section as SectionWithFramedText)} />;
    case "ComponentSectionSideSummary":
        return <RenderSideSummary {...(section as SideSummary)} />;
    case "ComponentDividerImageDivider":
        return <RenderImageDivider {...(section as ImageDivider)} />;
    case "ComponentDividerLineDivider":
        return <RenderLineDivider  {...(section as LineDivider)} />;
    default:
      return <p>Type de section inconnu : {section.__typename}</p>;
  }
};

export default SectionRenderer;
