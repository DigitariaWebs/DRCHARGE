"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SplitLayout } from "@/components/ui/split-layout";
import { images } from "@/lib/images";
import { Smartphone } from "lucide-react";
import {
  SPACING,
  TYPOGRAPHY,
  IMAGE_STYLES,
  ANIMATIONS,
} from "@/lib/design-tokens";

interface AppCTAProps {
  dictionary: Dictionary;
}

export function AppCTA({ dictionary }: AppCTAProps) {
  return (
    <SectionWrapper variant="light" padding="standard" className="bg-[#F9F9F9]">
      <div
        className={`container ${SPACING.containerPadding} mx-auto max-w-7xl`}
      >
        <SplitLayout
          imageSide="right"
          image={
            <div className="relative h-[600px] flex items-center justify-center p-8">
              {/* App Image */}
              <div
                className={`relative w-[300px] h-[600px] ${IMAGE_STYLES.rounded} ${IMAGE_STYLES.container} rotate-[-5deg] hover:rotate-0 transition-transform duration-500 z-10`}
              >
                <Image src={images.appMobile} alt="Dr Charge App" fill />
              </div>
            </div>
          }
          content={
            <motion.div {...ANIMATIONS.fadeInUp} className="space-y-8">
              <h2 className={`${TYPOGRAPHY.h2} text-gray-900`}>
                {dictionary.app_section.title}
              </h2>
              <p className={`${TYPOGRAPHY.subtitle} text-gray-600`}>
                {dictionary.app_section.description}
              </p>
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 ${SPACING.gap.small}`}
              >
                {dictionary.app_section.features.map(
                  (feature: string, i: number) => (
                    <div
                      key={i}
                      className={`flex items-center ${SPACING.gap.small} bg-white p-4 rounded-lg shadow-sm border border-gray-200`}
                    >
                      <Smartphone className="text-[#38A169] h-5 w-5" />
                      <span className="font-medium text-gray-900">
                        {feature}
                      </span>
                    </div>
                  ),
                )}
              </div>

              <div
                className={`flex flex-col sm:flex-row ${SPACING.gap.small} pt-4`}
              >
                <Button className="h-14 px-6 bg-black text-white hover:bg-gray-800 flex items-center gap-3 rounded-lg">
                  <div className="text-left">
                    <div className="text-[10px] uppercase">
                      Available on the
                    </div>
                    <div className="text-lg font-bold leading-none">
                      App Store
                    </div>
                  </div>
                </Button>
                <Button className="h-14 px-6 bg-black text-white hover:bg-gray-800 flex items-center gap-3 rounded-lg">
                  <div className="text-left">
                    <div className="text-[10px] uppercase">Get it on</div>
                    <div className="text-lg font-bold leading-none">
                      Google Play
                    </div>
                  </div>
                </Button>
              </div>
            </motion.div>
          }
        />
      </div>
    </SectionWrapper>
  );
}
