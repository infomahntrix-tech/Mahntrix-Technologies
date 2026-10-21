$code = @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;

public class OgImageGenerator {
    public static void Generate(string outputPath, string logoPath) {
        int width = 1200;
        int height = 630;
        
        using (Bitmap bmp = new Bitmap(width, height, PixelFormat.Format32bppArgb)) {
            using (Graphics g = Graphics.FromImage(bmp)) {
                g.SmoothingMode = SmoothingMode.AntiAlias;
                g.InterpolationMode = InterpolationMode.HighQualityBicubic;
                g.PixelOffsetMode = PixelOffsetMode.HighQuality;
                g.TextRenderingHint = System.Drawing.Text.TextRenderingHint.ClearTypeGridFit;

                // 1. Deep Tech Gradient Background (#0a0e16 -> #05070c)
                using (LinearGradientBrush bgBrush = new LinearGradientBrush(
                    new Point(0, 0),
                    new Point(width, height),
                    Color.FromArgb(255, 12, 16, 26),
                    Color.FromArgb(255, 5, 7, 12))) {
                    g.FillRectangle(bgBrush, 0, 0, width, height);
                }

                // 2. Cyan Top-Right Glow
                using (GraphicsPath glowPath = new GraphicsPath()) {
                    glowPath.AddEllipse(750, -150, 600, 600);
                    using (PathGradientBrush glowBrush = new PathGradientBrush(glowPath)) {
                        glowBrush.CenterColor = Color.FromArgb(60, 56, 189, 248);
                        glowBrush.SurroundColors = new Color[] { Color.FromArgb(0, 56, 189, 248) };
                        g.FillPath(glowBrush, glowPath);
                    }
                }

                // 3. Lime Accent Glow
                using (GraphicsPath limePath = new GraphicsPath()) {
                    limePath.AddEllipse(-120, 320, 500, 500);
                    using (PathGradientBrush limeBrush = new PathGradientBrush(limePath)) {
                        limeBrush.CenterColor = Color.FromArgb(40, 195, 240, 60);
                        limeBrush.SurroundColors = new Color[] { Color.FromArgb(0, 195, 240, 60) };
                        g.FillPath(limeBrush, limePath);
                    }
                }

                // 4. Outer Subtle Card Border
                using (Pen framePen = new Pen(Color.FromArgb(40, 255, 255, 255), 1.5f)) {
                    g.DrawRectangle(framePen, 24, 24, width - 48, height - 48);
                }

                // 5. Tech Accent Dots
                using (SolidBrush dotBrush = new SolidBrush(Color.FromArgb(22, 255, 255, 255))) {
                    for (int x = 60; x < width - 60; x += 45) {
                        for (int y = 60; y < height - 60; y += 45) {
                            if (x > 750 || y > 460) {
                                g.FillEllipse(dotBrush, x, y, 2, 2);
                            }
                        }
                    }
                }

                // 6. Draw High-Res Logo
                if (File.Exists(logoPath)) {
                    using (Image logo = Image.FromFile(logoPath)) {
                        int logoW = 280;
                        int logoH = (int)(logo.Height * ((float)logoW / logo.Width));
                        g.DrawImage(logo, 90, 85, logoW, logoH);
                    }
                }

                // 7. Pill Badge: "DIGITAL ENGINEERING & AI AGENCY"
                int badgeX = 90;
                int badgeY = 230;
                int badgeW = 330;
                int badgeH = 34;
                using (SolidBrush badgeBg = new SolidBrush(Color.FromArgb(28, 195, 240, 60))) {
                    g.FillRectangle(badgeBg, badgeX, badgeY, badgeW, badgeH);
                }
                using (Pen badgeBorder = new Pen(Color.FromArgb(90, 195, 240, 60), 1)) {
                    g.DrawRectangle(badgeBorder, badgeX, badgeY, badgeW, badgeH);
                }
                using (Font badgeFont = new Font("Segoe UI", 10.5f, FontStyle.Bold))
                using (SolidBrush badgeText = new SolidBrush(Color.FromArgb(255, 205, 250, 75))) {
                    g.DrawString("DIGITAL ENGINEERING & AI AGENCY", badgeFont, badgeText, badgeX + 16, badgeY + 7);
                }

                // 8. Main Heading: "Mahntrix Technologies"
                using (Font titleFont = new Font("Segoe UI", 46.0f, FontStyle.Bold))
                using (SolidBrush titleBrush = new SolidBrush(Color.FromArgb(255, 248, 250, 252))) {
                    g.DrawString("Mahntrix Technologies", titleFont, titleBrush, 85, 280);
                }

                // 9. Subheading / Service Capabilities (Clean ASCII separators)
                using (Font subFont = new Font("Segoe UI", 18.0f, FontStyle.Regular))
                using (SolidBrush subBrush = new SolidBrush(Color.FromArgb(255, 175, 190, 210))) {
                    g.DrawString("Web Applications   |   Real-Time WebRTC   |   Mobile Apps   |   Enterprise ERP & CRM", subFont, subBrush, 90, 380);
                }

                // 10. Footer Domain & Status
                using (Font domainFont = new Font("Segoe UI", 15.0f, FontStyle.Bold))
                using (SolidBrush cyanBrush = new SolidBrush(Color.FromArgb(255, 56, 189, 248))) {
                    g.DrawString("mahntrixtechnologies.com", domainFont, cyanBrush, 90, 490);
                }

                using (Font statusFont = new Font("Segoe UI", 13.0f, FontStyle.Regular))
                using (SolidBrush statusBrush = new SolidBrush(Color.FromArgb(255, 145, 160, 180))) {
                    g.DrawString("Production Ready  *  Global High-Performance Edge", statusFont, statusBrush, 750, 492);
                }
            }

            bmp.Save(outputPath, ImageFormat.Png);
        }
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
$outputPath = Join-Path $PSScriptRoot "..\public\images\og-image.png"
$logoPath = Join-Path $PSScriptRoot "..\public\images\mahntrix-full-logo.png"

[OgImageGenerator]::Generate($outputPath, $logoPath)
Write-Output "Successfully generated OG Image at: $outputPath"
