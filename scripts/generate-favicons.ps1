$code = @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;

public class LogoGenerator {
    public static Bitmap CreateLogo(int size) {
        Bitmap bmp = new Bitmap(size, size, PixelFormat.Format32bppArgb);
        using (Graphics g = Graphics.FromImage(bmp)) {
            g.SmoothingMode = SmoothingMode.AntiAlias;
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.PixelOffsetMode = PixelOffsetMode.HighQuality;
            g.Clear(Color.Transparent);

            float s = size / 512.0f;

            // 1. Sleek Dark Circular Background Badge
            RectangleF bgRect = new RectangleF(12 * s, 12 * s, 488 * s, 488 * s);
            using (SolidBrush bgBrush = new SolidBrush(Color.FromArgb(255, 10, 14, 22))) {
                g.FillEllipse(bgBrush, bgRect);
            }

            // 2. Cyan Glowing Outer Rim
            using (Pen ringPen = new Pen(Color.FromArgb(140, 56, 189, 248), 6 * s)) {
                g.DrawEllipse(ringPen, bgRect);
            }

            // 3. Dynamic Outer Cyan/Blue Crescent Swoosh
            using (GraphicsPath bluePath = new GraphicsPath()) {
                PointF[] bluePoints = new PointF[] {
                    new PointF(275 * s, 62 * s),
                    new PointF(145 * s, 75 * s),
                    new PointF(55 * s, 165 * s),
                    new PointF(55 * s, 280 * s),
                    new PointF(110 * s, 390 * s),
                    new PointF(230 * s, 452 * s),
                    new PointF(370 * s, 435 * s),
                    new PointF(405 * s, 410 * s),
                    new PointF(320 * s, 428 * s),
                    new PointF(220 * s, 400 * s),
                    new PointF(135 * s, 325 * s),
                    new PointF(120 * s, 230 * s),
                    new PointF(160 * s, 130 * s),
                    new PointF(230 * s, 78 * s)
                };
                bluePath.AddClosedCurve(bluePoints, 0.45f);
                using (LinearGradientBrush blueBrush = new LinearGradientBrush(
                    new PointF(50 * s, 50 * s),
                    new PointF(400 * s, 450 * s),
                    Color.FromArgb(255, 56, 189, 248),
                    Color.FromArgb(255, 2, 132, 199))) {
                    g.FillPath(blueBrush, bluePath);
                }
            }

            // 4. Inner White Accent Crescent Swoosh
            using (GraphicsPath whitePath = new GraphicsPath()) {
                PointF[] whitePoints = new PointF[] {
                    new PointF(230 * s, 148 * s),
                    new PointF(160 * s, 205 * s),
                    new PointF(150 * s, 290 * s),
                    new PointF(190 * s, 370 * s),
                    new PointF(290 * s, 422 * s),
                    new PointF(415 * s, 385 * s),
                    new PointF(330 * s, 400 * s),
                    new PointF(245 * s, 365 * s),
                    new PointF(195 * s, 305 * s),
                    new PointF(195 * s, 220 * s),
                    new PointF(235 * s, 165 * s)
                };
                whitePath.AddClosedCurve(whitePoints, 0.45f);
                using (SolidBrush whiteBrush = new SolidBrush(Color.FromArgb(245, 255, 255, 255))) {
                    g.FillPath(whiteBrush, whitePath);
                }
            }

            // 5. Letter 'M' in Crisp Pure White
            using (GraphicsPath mPath = new GraphicsPath()) {
                PointF[] mPoints = new PointF[] {
                    new PointF(212 * s, 335 * s),
                    new PointF(212 * s, 180 * s),
                    new PointF(248 * s, 180 * s),
                    new PointF(280 * s, 255 * s),
                    new PointF(312 * s, 180 * s),
                    new PointF(348 * s, 180 * s),
                    new PointF(348 * s, 335 * s),
                    new PointF(314 * s, 335 * s),
                    new PointF(314 * s, 235 * s),
                    new PointF(290 * s, 290 * s),
                    new PointF(270 * s, 290 * s),
                    new PointF(246 * s, 235 * s),
                    new PointF(246 * s, 335 * s)
                };
                mPath.AddPolygon(mPoints);
                using (SolidBrush mBrush = new SolidBrush(Color.White)) {
                    g.FillPath(mBrush, mPath);
                }
            }

            // 6. Letter 'T' in Vibrant Electric Cyan / Sky Blue Gradient
            using (GraphicsPath tPath = new GraphicsPath()) {
                PointF[] tPoints = new PointF[] {
                    new PointF(360 * s, 180 * s),
                    new PointF(472 * s, 180 * s),
                    new PointF(472 * s, 215 * s),
                    new PointF(432 * s, 215 * s),
                    new PointF(432 * s, 335 * s),
                    new PointF(398 * s, 335 * s),
                    new PointF(398 * s, 215 * s),
                    new PointF(360 * s, 215 * s)
                };
                tPath.AddPolygon(tPoints);
                using (LinearGradientBrush tBrush = new LinearGradientBrush(
                    new PointF(360 * s, 180 * s),
                    new PointF(472 * s, 335 * s),
                    Color.FromArgb(255, 56, 189, 248),
                    Color.FromArgb(255, 0, 180, 216))) {
                    g.FillPath(tBrush, tPath);
                }
            }
        }
        return bmp;
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing

$img512 = [LogoGenerator]::CreateLogo(512)
$img512.Save("c:\Users\LENOVO\OneDrive\Desktop\MahntrixTechnologies\public\icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$img512.Save("c:\Users\LENOVO\OneDrive\Desktop\MahntrixTechnologies\src\app\icon.png", [System.Drawing.Imaging.ImageFormat]::Png)

$img180 = [LogoGenerator]::CreateLogo(180)
$img180.Save("c:\Users\LENOVO\OneDrive\Desktop\MahntrixTechnologies\public\apple-icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$img180.Save("c:\Users\LENOVO\OneDrive\Desktop\MahntrixTechnologies\src\app\apple-icon.png", [System.Drawing.Imaging.ImageFormat]::Png)

$img64 = [LogoGenerator]::CreateLogo(64)
$hIcon = $img64.GetHicon()
$icon = [System.Drawing.Icon]::FromHandle($hIcon)

$fsPub = [System.IO.File]::Create("c:\Users\LENOVO\OneDrive\Desktop\MahntrixTechnologies\public\favicon.ico")
$icon.Save($fsPub)
$fsPub.Dispose()

$fsApp = [System.IO.File]::Create("c:\Users\LENOVO\OneDrive\Desktop\MahntrixTechnologies\src\app\favicon.ico")
$icon.Save($fsApp)
$fsApp.Dispose()

Write-Host "All icons generated cleanly with 100% precision!"
