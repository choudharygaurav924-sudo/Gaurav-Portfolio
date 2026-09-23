import { StaggeredMenu } from "@/components/ui/StaggeredMenu";
import { BRAND, NAV_LINKS, SOCIALS } from "@/lib/data";

export function SiteMenu() {
  return (
    <StaggeredMenu
      position="right"
      isFixed
      items={NAV_LINKS.map((link) => ({
        label: link.label,
        ariaLabel: link.ariaLabel,
        link: link.href,
      }))}
      socialItems={SOCIALS.map((social) => ({
        label: social.label,
        link: social.href,
      }))}
      displaySocials
      displayItemNumbering
      logoText={BRAND.name}
      logoHref="#hero"
      ctaLabel="Let's Talk"
      ctaHref="#contact"
      colors={["#171717", "#8A8A8A"]}
      accentColor="#F3F1EC"
      menuButtonColor="#F3F1EC"
      openMenuButtonColor="#050505"
      changeMenuColorOnOpen
    />
  );
}
