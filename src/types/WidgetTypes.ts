import { z } from 'zod';
export interface Widget {
  _id: string;
  title: string,
  type: WidgetType;
  code: string,
  content: WidgetContent;
  settings: WidgetSettings;
  createdAt: string;
  updatedAt: string;
}

export type WidgetType = 'slider' | 'ctaBanner' | 'marketingPopup'; // Add more types as needed

// Specific content interfaces for each widget type
export interface SliderContent {
  slides: Slide[];
}

export interface Slide {
  imageUrl: string;
  caption: string;
}

export interface CtaBannerContent {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export interface MarketingPopupContent {
  message: string;
  imageUrl: string;
  link: string;
}

// Union type of all possible content interfaces
export type WidgetContent = SliderContent | CtaBannerContent | MarketingPopupContent;

// Settings interfaces (you can add more specific fields if needed)
export interface SliderSettings {
  autoPlay: boolean;
  delay: number;
}

export interface CtaBannerSettings {
  backgroundColor: string;
}

export interface MarketingPopupSettings {
  showOnPageLoad: boolean;
  delay: number;
}

// Union type of all possible settings interfaces
export type WidgetSettings = SliderSettings | CtaBannerSettings | MarketingPopupSettings;


// WidgetType as a Zod literal type
const WidgetType = z.enum(['Slider', 'Cta Banner', 'Marketing Popup']);

// SliderContent schema
const SliderContent = z.object({
  slides: z.array(z.object({
    imageUrl: z.string(),
    caption: z.string(),
  })),
});

// CtaBannerContent schema
const CtaBannerContent = z.object({
  title: z.string(),
  subtitle: z.string(),
  ctaText: z.string(),
  ctaLink: z.string(),
});

// MarketingPopupContent schema
const MarketingPopupContent = z.object({
  message: z.string(),
  imageUrl: z.string(),
  link: z.string(),
});

// Union of all possible content schemas
const WidgetContent = z.union([
  SliderContent,
  CtaBannerContent,
  MarketingPopupContent,
]);

// SliderSettings schema
const SliderSettings = z.object({
  autoPlay: z.boolean(),
  delay: z.number(),
  template: z.string()
});

// CtaBannerSettings schema
const CtaBannerSettings = z.object({
  backgroundColor: z.string(),
});

// MarketingPopupSettings schema
const MarketingPopupSettings = z.object({
  showOnPageLoad: z.boolean(),
  delay: z.number(),
});

// Union of all possible settings schemas
const WidgetSettings = z.union([
  SliderSettings,
  CtaBannerSettings,
  MarketingPopupSettings,
]);

// Complete schema for creating a widget
export const createWidget = z.object({
  title: z.string(),
  type: WidgetType,
  code: z.string(),
  content: WidgetContent,
  settings: WidgetSettings.optional(),
});

// Complete schema for updating a widget
export const updateWidget = z.object({ _id: z.string() }).merge(createWidget.partial()); // Update allows partial data

// Types for create and update widget payloads
export type CreateWidget = z.infer<typeof createWidget>;
export type UpdateWidget = z.infer<typeof updateWidget>;


