<template>
  <main>
    <h1>Key Characters of Gears of War</h1>

    <p>
      Explore the lives and legacies of some of the most iconic figures in the
      Gears of War universe. Each character played a crucial role in humanity's
      struggle for survival against the Locust Horde.
    </p>
    <p>
      Each character you’ll find here played a crucial role in humanity's
      struggle for survival against the Locust Horde. Their stories highlight
      not only the brutality of war but also the friendships, losses, and
      resilience that defined Delta Squad.
    </p>

    <h2>Marcus Fenix</h2>

    <p>
      A battle-hardened war hero and the face of the Coalition’s military
      resistance. Marcus Fenix led Delta Squad through some of the most brutal
      encounters against the Locust and Lambent, proving himself a resilient and
      strategic leader in humanity’s darkest moments.
    </p>

    <p>
      Despite his rough exterior, Marcus carries a deep sense of duty and a
      strong emotional core shaped by loss, loyalty, and sacrifice. His story
      represents the struggle of an entire world fighting for survival.
    </p>

    <img
      src="/marcus.webp"
      class="mb-10"
      alt="Marcus Fenix, a muscular white soldier with a square jaw and a bandana"
    />

    <h2>Dominic “Dom” Santiago</h2>

    <p>
      Marcus Fenix’s closest friend and one of the emotional pillars of Delta
      Squad. Dom fought not only for humanity but for his family, whose tragic
      fate haunted him throughout the war and motivated his every decision.
    </p>

    <p>
      Known for his compassion and unwavering loyalty, Dom often balanced
      Marcus's hardened personality with hope and empathy. His sacrifices stand
      among the most impactful moments in the Gears of War series.
    </p>

    <img
      src="/dom.webp"
      class="mb-10"
      alt="Dom Santiago, a strong white COG soldier with short dark hair, facial stubble, and bulky combat armor."
    />

    <h2>Queen Myrrah</h2>

    <p>
      Supreme leader of the Locust Horde and one of humanity’s most formidable
      foes. Queen Myrrah is a strategist driven by the survival of her people,
      commanding her forces with absolute authority and a deep sense of purpose.
    </p>

    <p>
      Her enigmatic origins and complex motivations reveal that the Locust
      conflict was never a simple battle of good versus evil. Myrrah’s
      intelligence, resolve, and personal history make her one of the most
      compelling antagonists in the franchise.
    </p>

    <img
      src="/myrrah.webp"
      class="mb-10"
      alt="Queen Myrrah, a pale woman with sharp features and a dark armor."
    />

    <h2>Augustus “Cole Train” Cole</h2>

    <p>
      A former Thrashball superstar whose charisma and unmatched energy carry
      through every battlefield charge. Augustus Cole is known for his
      confidence, explosive fighting style, and the contagious enthusiasm that
      inspires his squadmates.
    </p>

    <p>
      Despite his loud personality and humorous one-liners, Cole also carries
      the weight of loss and the trauma of war. His resilience and optimism form
      a critical balance within Delta Squad, making him both a powerhouse and a
      morale booster.
    </p>

    <img
      src="/cole.webp"
      class="mb-10"
      alt="Augustus Cole, a tall, African American muscular soldier wearing COG armor."
    />
  </main>
</template>

<script setup>
useHead({
  title: "Gears of War - Characters",
});
</script>

<style scoped>
.character-card {
  @apply space-y-4 max-w-3xl;
}

.character-img {
  @apply w-full max-w-sm rounded-lg shadow-lg border border-primary;
}
</style>
