# AWS Amplify Deployment Guide for RetroFlix Cinema

## Overview
This guide explains how to deploy the RetroFlix Cinema website to AWS Amplify. The application has been configured as a static site for optimal performance and cost-effectiveness.

## Prerequisites
- AWS Account with Amplify access
- GitHub repository with your code
- Basic understanding of AWS console

## Deployment Steps

### 1. Prepare Your Repository
Ensure your repository contains:
- `amplify.yml` - Build configuration file
- `client/public/_redirects` - Routing configuration for SPA
- Updated pages using static data instead of API calls

### 2. Connect to AWS Amplify

1. **Login to AWS Console**
   - Navigate to AWS Amplify service
   - Click "Get Started" under "Deploy"

2. **Connect Repository**
   - Select your Git provider (GitHub, GitLab, etc.)
   - Authorize AWS Amplify to access your repository
   - Select your repository and branch (usually `main` or `master`)

3. **Configure Build Settings**
   - AWS Amplify will automatically detect the `amplify.yml` file
   - Verify the build settings match:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: dist/public
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```

4. **Review and Deploy**
   - Click "Next" to review settings
   - Click "Save and Deploy"

### 3. Environment Configuration

The application is configured to work as a static site without backend dependencies:
- Movie data is embedded in the application
- No database connections required
- All animations and styling are client-side

### 4. Custom Domain (Optional)

After successful deployment:
1. Go to "Domain Management" in your Amplify app
2. Add your custom domain
3. Configure DNS records as instructed
4. Wait for SSL certificate provisioning

### 5. Performance Optimizations

The app includes:
- Static asset optimization
- Responsive design for mobile devices
- Efficient CSS animations
- Optimized image loading

## Features Included

✅ **Retro 90s Design**
- Animated starfield background
- Rainbow color effects
- Retro typography and styling
- Blinking animations and marquee text

✅ **Movie Showcase**
- Featured movies display
- Movie catalog with posters
- Trailer previews
- Responsive grid layout

✅ **Navigation**
- Multi-page routing
- Retro-styled buttons
- Mobile-friendly navigation

✅ **Static Content**
- About page with cinema information
- Contact page with details
- VIP membership information

## Troubleshooting

### Common Issues:

1. **Build Fails**
   - Check Node.js version compatibility
   - Verify all dependencies are listed in package.json
   - Review build logs for specific errors

2. **Routing Issues**
   - Ensure `_redirects` file is in `client/public/` directory
   - Check that all routes are defined in the router

3. **Styling Issues**
   - Verify Tailwind CSS is properly configured
   - Check that all CSS imports are correct

### Build Specifications:
- **Node.js**: Latest LTS version
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Environment**: Static site (no server required)

## Cost Estimation

AWS Amplify Pricing (as of 2024):
- **Build**: $0.01 per build minute
- **Hosting**: $0.15 per GB stored per month
- **Data Transfer**: $0.15 per GB served
- **Free Tier**: 1000 build minutes and 15GB served per month

For a small movie showcase site, monthly costs typically range from $0-5.

## Support

For deployment issues:
1. Check AWS Amplify documentation
2. Review build logs in the Amplify console
3. Verify repository settings and permissions
4. Contact AWS support for service-specific issues

## Next Steps After Deployment

1. **Monitor Performance**
   - Use AWS CloudWatch for metrics
   - Monitor user engagement

2. **SEO Optimization**
   - Add meta tags for better search visibility
   - Submit sitemap to search engines

3. **Analytics**
   - Integrate Google Analytics or similar
   - Track user interactions

4. **Content Updates**
   - Add new movies by updating the data files
   - Deploy updates through Git pushes

Your RetroFlix Cinema website is now ready for the world to experience that authentic 90s nostalgia!