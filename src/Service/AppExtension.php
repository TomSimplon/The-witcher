<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class AppExtension extends AbstractExtension
{
    public function getFilters()
    {
        return [
            new TwigFilter('html_decode', [$this, 'htmlDecode']),
        ];
    }

    public function htmlDecode($string)
    {
        return html_entity_decode($string, ENT_QUOTES | ENT_HTML5, 'UTF-8');
    }
}
