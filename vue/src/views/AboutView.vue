<template>
  <div class="about">
    <header>
      <h1>About Semiotic Analysis Tool</h1>
    </header>
    <section class="intro">
      <h2>Welcome to the Semiotic Analysis Tool</h2>
      <p>
        Our Semiotic Analysis Tool is designed to help you delve into the world of semiotics and analyze signs, symbols, and meanings. Whether you're studying literature, media, or any other field where semiotics plays a crucial role, our tool provides an intuitive and comprehensive interface for your analysis needs.
      </p>
    </section>
    <section class="features">
      <h2>Features</h2>
      <ul>
        <li><strong>Multi-Page Analysis:</strong> Manage and analyze multiple datasets or documents with ease.</li>
        <li><strong>Interactive Visualizations:</strong> Explore data through interactive charts and graphs.</li>
        <li><strong>Customizable Metrics:</strong> Tailor the analysis metrics to fit your specific needs.</li>
        <li><strong>Export Options:</strong> Export your analysis results in various formats for further use or sharing.</li>
      </ul>
    </section>
    <section class="team">
      <h2>Meet the Team</h2>
      <p>
        Our tool is developed and maintained by a dedicated team of experts in semiotics, data science, and software development. We are passionate about providing a robust and user-friendly tool for researchers and enthusiasts alike.
      </p>
      <p>
        For more information or to get in touch with the team, please <a href="/contact">contact us</a>.
      </p>
    </section>
    <footer>
      <p>&copy; 2024 Semiotic Analysis Tool. All rights reserved.</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutPage',
});
</script>

<style scoped>
.about {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

header {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2rem;
  color: #333;
}

.intro, .features, .team {
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.5rem;
  color: #555;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 0.5rem 0;
}

footer {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.875rem;
  color: #777;
}
</style>
