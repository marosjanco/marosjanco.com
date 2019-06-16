<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', '7C00xJrtdh' );

/** MySQL database username */
define( 'DB_USER', '7C00xJrtdh' );

/** MySQL database password */
define( 'DB_PASSWORD', 'cxrVlkEn8H' );

/** MySQL hostname */
define( 'DB_HOST', 'remotemysql.com' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'xr>t~hHn^JnNfhJyug#p4Hf8HDLuZGW@O=+/Aim_p,dOG>H|f47:AI,6|Lr*fC^f' );
define( 'SECURE_AUTH_KEY',  'Z0 ],oL.<}MJ3paex]y%cbB ?pH&Mimou#*OuYcjfMaz8zICw)Y|%T,YPTra]1-:' );
define( 'LOGGED_IN_KEY',    '85Efgv%S~7Mp6js%Z;Vl<*u-!.B$OjhLj#8u> *q#,)EaMhJ|I{.]t}QjR,8M7xW' );
define( 'NONCE_KEY',        'Z8E--P:MM~@R)Dq?g*5?[=I9XcA a6<q1dLHL!gp`CIQ9R(|^}Y~zNY3cqCL)Mfc' );
define( 'AUTH_SALT',        '<~rju%wA:o3R1mOc)XWl|px&uBY~)e2[0+nZYRJ~RElwX)UzBK5X%ycQ!VRi6x:-' );
define( 'SECURE_AUTH_SALT', 'P>n(|JB=t0_Kz/Z$$n<tryn{$C5ofozb[wJjiOXEL(b<8t7nN>NARV4F1-0bA){1' );
define( 'LOGGED_IN_SALT',   'n9`i[5|Kq>ahggX%q])M9n]h?#Oqz^=3AKcXRd/&q(yGjHkh0G;$=cH6QAJ>?=Xp' );
define( 'NONCE_SALT',       'D}aypxz.^?~9S`zF8o`y6[=*42!c)T?#i)VH72LWM-[vmSLOP61EK{!5!Zm%imR`' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
