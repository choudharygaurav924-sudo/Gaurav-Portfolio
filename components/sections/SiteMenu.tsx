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
      ctaLabel="GET IN TOUCH"
      ctaHref="#contact-email"
      colors={["#050505", "#171717"]}
      accentColor="#F3F1EC"
      menuButtonColor="#F3F1EC"
      openMenuButtonColor="#050505"
      changeMenuColorOnOpen
    />
  );
}
