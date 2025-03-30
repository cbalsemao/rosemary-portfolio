export const PAGES_NAMES = ['menu', 'contact'];
export const ZERO = 0;
export const TOTAL_IMAGES = 12;

export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const OFFSET = 55;
export const formattedId = (page: string) =>
  page.toLowerCase().replace(' ', '-');

export const randomPhrase = (array: string[]) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const handleScrollTo = (targetTop: number) => {
  window.scrollTo({
    top: targetTop,
    behavior: 'instant' as ScrollBehavior,
  });
};

export const getOffsetBySectionId = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  const sectionPosition = section?.getBoundingClientRect().top || 0;
  const topSectionPosition = sectionPosition + window.scrollY - OFFSET;
  return topSectionPosition;
};
